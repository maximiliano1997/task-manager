import { createContext, useContext, useState } from 'react'


const reponseContext = createContext()


const ReponseContextWrapper = ({ children }) => {
    const [responseStatus, setResponseStatus] = useState({
        status: ''
    })


    const value = { responseStatus, setResponseStatus }




    return (
        <reponseContext.Provider value={value}>
            {children}
        </reponseContext.Provider>
    )
}

const useResponseContext = () => useContext(reponseContext)

export { ReponseContextWrapper, useResponseContext }