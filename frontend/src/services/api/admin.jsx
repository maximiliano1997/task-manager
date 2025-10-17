import React from 'react'

const api = 'http://172.23.125.95:3000'
const api_urls = {
    // Users
    readUsers: `${api}/api/v1/admin/userPanel`,
    updateUsers: `${api}/api/v1/admin/userPanel`,
    deleteUsers: `${api}/api/v1/admin/userPanel`,

    // Tasks
    readTasks: `${api}/api/v1/admin/taskPanel`,
    updateTasks: `${api}/api/v1/admin/taskPanel`,
    deleteTasks: `${api}/api/v1/admin/taskPanel`,
}

export const readAllUsers = async () => {
    const token = localStorage.getItem('authToken')

    if (!token) {
        console.error('Token not found!')
        return;
    }

    try {
        const response = await fetch(`${api_urls.readUsers}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        })

        const { data } = await response.json()

        console.log(response, data)

        if (!response) {
            return { data }
            // throw new Error(`Error: ${response}`)
        }

        return { data }
    } catch (error) {
        console.log(error)
    }

}



export const readAllTasks = async () => {
    const token = localStorage.getItem('authToken')

    if (!token) {
        console.error('Token not found!')
        return;
    }

    try {
        const response = await fetch(`${api_urls.readTasks}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        })

        const { data } = await response.json()
        // console.log('readTaskData', data)

        if (!response) {
            throw new Error(`Error: ${response}`)
        }

        return { data };
    } catch (error) {
        console.error(error)
    }

}

export const updateTasks = async (id, payload) => {
    const token = localStorage.getItem('authToken')

    if (!token) {
        console.error('Token not found!')
        return;
    }

    try {
        const response = await fetch(`${api_urls.updateTasks}/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                'name': payload.name,
                'description': payload.description,
                'completed': payload.completed,
            }),
        })

        const { data } = await response.json()

        if (!response) {
            return { data }
        }
        console.log(data)
        return { data }
    } catch (error) {
        console.log(error)
    }



}


export const deleteTasks = async (id) => {
    const token = localStorage.getItem('authToken')

    if (!token) {
        console.error('Token not found!')
        return;
    }

    try {
        const response = await fetch(`${api_urls.deleteTasks}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authoriations: `Bearer ${token}`,
            },
        })

        const { data } = await response.json()

        if (!response) {
            return { data }
        }

        return { data }
    } catch (error) {
        console.log(error)
    }
}
