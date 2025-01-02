import React, { useState, createContext, useContext } from 'react'

import { readAllUsers, readAllTasks } from '../services/api/admin'

const adminContext = createContext()


const AdminContextWrapper = ({ children }) => {
    const [adminData, setAdminData] = useState({
        tasks: [],
        users: [],

    })

    // const [taskPanelPagination, setTaskPanelPagination] = useState({

    // })

    const value = {
        adminData,
        setAdminData,

        readAllUsers,
        readAllTasks,
    }

    return (
        <adminContext.Provider value={value}>
            {children}
        </adminContext.Provider>
    )
}

const useAdminContext = () => useContext(adminContext)

export { AdminContextWrapper, useAdminContext }