import { createContext, useContext, useEffect, useState } from 'react'
import { createUser, loginUser, readUser, updateUser, deleteUser } from '../services/api/users'

const userContext = createContext()

// iniciar naming siempre con mayuscula
const UserContextWrapper = ({ children }) => {
    const [user, setUser] = useState({
        name: 'unavailable',
        email: 'unavailable',
        password: 'unavailable',
        role: 'unavailable',
        createdAt: 'unavailable'
    })


    // useEffect(() => {
    //     readUser('http://172.23.125.95:3000/api/v1/userProfile')
    //         .then((response) => setUser(response))
    //         .catch(error => console.log(error))
    // }, [])


    // Could be data, function or both and much more things
    const value = {
        user,
        setUser,
        createUser,
        loginUser,
        readUser,
        updateUser,
        deleteUser,
    }

    return (
        <userContext.Provider value={value} >
            {children}
        </userContext.Provider>
    )
}


const useUserContext = () => useContext(userContext)


export { UserContextWrapper, useUserContext }