import { useState, useEffect } from 'react'
import { Button } from 'antd'

// contexto
import { useTaskContext } from '../../contexts/index'
import { useAdminContext } from '../../contexts/adminContext'

export function Pagination({ page }) {
    const { tasks, setTasks, readTask, deleteTask, pagination, setPagination } = useTaskContext()
    const { adminData } = useAdminContext()

    useEffect(() => {
        const startIndex = (pagination.currentPage - 1) * pagination.pageSize + 1; // Índice inicial
        const endIndex = Math.min(pagination.currentPage * pagination.pageSize, pagination.totalItems); // Índice final


        console.log(startIndex, endIndex)
        if (page === 'adminTasksPanel') {
            setPagination({
                ...pagination,
                paginatedData: adminData.tasks.slice(startIndex, endIndex),
                totalItems: adminData.tasks.length
            })
        } else {
            setPagination({
                ...pagination,
                paginatedData: tasks.slice(startIndex, endIndex) || adminData.slice(startIndex, endIndex),
                totalItems: tasks.length
            })
        }
    }, [tasks, pagination.currentPage, pagination.pageSize, adminData.tasks])

    const handlePagination = (e, action) => {
        e.preventDefault()
        if (action === 'rest' && pagination.currentPage > 1) {
            setPagination({ ...pagination, currentPage: pagination.currentPage - 1 })

        }
        if (action === 'plus') {
            setPagination({ ...pagination, currentPage: pagination.currentPage + 1 })
        }

    }


    console.log(tasks.length)
    return (
        <>
            <div className="pt-2 font-bold text-center text-white">
                <p>{`Showing ${(pagination.currentPage - 1) * pagination.pageSize + 1} to ${Math.min(pagination.currentPage * pagination.pageSize, pagination.totalItems)} of ${pagination.totalItems} tasks`}</p>
            </div>
            <div className="flex gap-6 align-center">
                <Button onClick={(e) => handlePagination(e, 'rest')}
                    disabled={pagination.currentPage === 1}
                > Anterior </Button>
                <span className="pt-2 font-bold text-center text-white">Page {pagination.currentPage}</span>
                <Button onClick={(e) => handlePagination(e, 'plus')}
                    disabled={pagination.currentPage === Math.ceil(pagination.totalItems / pagination.pageSize)}
                > Siguiente </Button>
            </div >
        </>
    )
}