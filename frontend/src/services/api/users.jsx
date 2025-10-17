import { useNavigate } from 'react-router-dom'

const api = 'http://172.23.125.95:3000'
const api_urls = {
    // auth and user
    create: `${api}/api/v1/auth/register`,
    loginAuth: `${api}/api/v1/auth/login`,
    read: `${api}/api/v1/userProfile`,
    update: `${api}/api/v1/userProfile`,
    delete: `${api}/api/v1/userProfile`,
}




export const createUser = async (user) => {
    console.log('Register working...')


    try {
        const response = await fetch(api_urls.create, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "name": user.name,
                "email": user.email,
                "password": user.password,
            }),
        });

        const data = await response.json()

        if (!response.ok) {
            console.error('User failed to regiser:', response.status)
            console.log('Response:', data)
            console.log('Error:', data.error)
            const data = await response.json()

            return { success: false, error: data.message }
        }


        console.log('User created successfully')
        console.log(data)
        return { success: data.success, data };
    } catch (error) {
        console.error('Error on intented user registration', error)
        return { success: false, error: error }
    }
}

export const loginUser = async (user) => {

    try {
        const response = await fetch(api_urls.loginAuth, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'email': user.email,
                'password': user.password,
            }),
        })

        const data = await response.json()

        console.log(data)
        if (!response.ok) {
            console.error('User failed to register', response.status)
            console.log('Response:', data)

            return { success: false, error: data.message }
        }


        console.log('User logged successfully !')
        console.log(data)
        return { data }
    } catch (error) {
        console.error('Error on Login User....', error)
        return { success: false, error: error }
    }
}


export const readUser = async (url) => {
    const token = localStorage.getItem('authToken')
    if (!token) {
        console.error('Token not found!')
        return;
    }


    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        });

        const { data } = await response.json()

        if (!response.ok) {
            throw new Error(`Error: ${response} ${response}`)
        }


        return data.user
    } catch (error) {
        console.error(error)
    }

}

export const updateUser = async (id, user) => {
    console.log('updating user', user)

    const token = localStorage.getItem('authToken')
    if (!token) {
        console.error('Token not found!')
        return;
    }

    console.log(user, id)
    console.log(token)

    try {
        const response = await fetch(`http://172.23.125.95:3000/api/v1/userProfile/${id}`, {
            method: 'PATCH',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                "name": user.name,
                "email": user.email,
                "password": user.password,
            })
        });

        const { data, message } = await response.json()

        if (!response.ok) {
            throw new Error(`Error: ${response} ${response}`)
        }
        let lol = 'test'
        return { lol, data, message }
    } catch (error) {
        console.error(error.message)
    }
}


export const deleteUser = async (userId) => {
    console.log(userId)


    const token = localStorage.getItem('authToken')
    if (!token) {
        console.error('Token not found!')
        return;
    }

    const response = await fetch(`http://172.23.125.95:3000/api/v1/userProfile/${userId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${token}`
        },
    })

    const { data } = await response.json()

    console.log(data)
    return data
}