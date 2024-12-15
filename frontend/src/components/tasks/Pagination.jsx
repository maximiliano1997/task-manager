import { useState, useEffect } from 'react'
import { Button } from 'antd'

// contexto
import { useTaskContext } from '../../contexts/index'

export function Pagination() {
    const { tasks, setTasks, readTask, deleteTask, pagination, setPagination } = useTaskContext()


    const handlePagination = (e, action) => {
        e.preventDefault()
        if (action === 'rest') {
            setPagination({ ...pagination, currentPage: pagination.currentPage - 1 })

        }
        if (action === 'plus') {
            setPagination({ ...pagination, currentPage: pagination.currentPage + 1 })
        }

    }


    console.log(pagination.currentPage)
    return (
        <>
            <div className="pt-2 font-bold text-center text-white">
                <p>{`Showing 1 to 10 of ${tasks.length} tasks`}</p>
            </div>
            <div className="flex gap-6 align-center">
                <Button onClick={(e) => handlePagination(e, 'rest')}> Anterior </Button>
                <span className="pt-2 font-bold text-center text-white">Page {pagination.currentPage}</span>
                <Button onClick={(e) => handlePagination(e, 'plus')}> Siguiente </Button>
            </div >
        </>
    )
}