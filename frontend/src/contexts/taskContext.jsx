import React, { useContext, createContext, useState } from 'react'
import { createTask, readTask, updateTask, deleteTask } from '../services/api/tasks'

const taskContext = createContext()



const TaskContextWrapper = ({ children }) => {
    const [tasks, setTasks] = useState([])

    const [pagination, setPagination] = useState({
        currentPage: 1,
        pageSize: 10,
        totalItems: 0,
        paginatedData: [],
    })


    const value = {
        tasks,
        setTasks,

        pagination,
        setPagination,

        createTask,
        readTask,
        updateTask,
        deleteTask,
    }

    return (
        <taskContext.Provider value={value}>
            {children}
        </taskContext.Provider>
    )
}


const useTaskContext = () => useContext(taskContext)


export { TaskContextWrapper, useTaskContext }