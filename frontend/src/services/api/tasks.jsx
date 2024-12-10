import React from 'react'

const api = 'http://172.23.125.95:3000'
const api_urls = {
    // auth and user
    create: `${api}/api/v1/tasks`,
    read: `${api}/api/v1/tasks/`,
    update: `${api}/api/v1/tasks`,
    delete: `${api}/api/v1/tasks`,
}


export const createTask = async (task) => {

    const token = localStorage.getItem('authToken')

    if (!token) {
        console.error('Token not found!')
        return;
    }

    console.log('createTask', task)


    try {
        const response = await fetch(`${api_urls.create}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                "name": task.name,
                "description": task.description,
                "completed": task.completed,
            })
        })

        const { data } = await response.json()

        console.log(data)
        if (!response) {
            throw new Error(`Error: ${response}`)
        }

        return data
    } catch (error) {
        console.log(error)
    }
}


export const readTask = async () => {
    const token = localStorage.getItem('authToken')

    if (!token) {
        console.error('Token not found!')
        return;
    }

    console.log('api_urls.read', api_urls.read)
    console.log('readTaskToken', token)
    try {
        const response = await fetch(`${api_urls.read}`, {
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

export const updateTask = async (id, task) => {
    const token = localStorage.getItem('authToken')

    if (!token) {
        console.error('Token not found!')
        return;
    }

    console.log('api_urls.read', api_urls.read)
    console.log('readTaskToken', token)

    try {
        const response = await fetch(`${api_urls.update}/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                'name': task.name,
                'description': task.description,
                'completed': task.completed
            })
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



export const deleteTask = async (id) => {
    const token = localStorage.getItem('authToken')

    if (!token) {
        console.error('Token not found.')
        return;
    }

    console.log(token, 'lol', id)
    try {
        const response = await fetch(`${api_urls.delete}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
        })

        const { data } = await response.json()

        console.log(data)

        if (!response) {
            throw new Error(`Error: ${response}`)
        }

        return { data }
    } catch (error) {
        console.error(error)
    }
}
