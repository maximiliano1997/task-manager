import { useUserContext } from '../contexts/userContext'
import { Navigate, useLocation } from 'react-router-dom'
// import { useResponseContext } from '../contexts/reponseStateContext'
import { toast } from 'react-toastify'



export function ProtectedRoute({ children }) {
    // const { user } = useUserContext()
    const currentLocation = useLocation()
    const authRole = localStorage.getItem('authRole')?.trim();
    console.log(authRole, 'protected')
    console.log(authRole, authRole === 'USER'); // ¿Es esto `true`?


    if (authRole !== "USER") {
        toast.error('Log In to access content')
        return <Navigate to='/login' state={{ from: currentLocation }} replace />
    } else {


        return <>{children}</>

    }
}



