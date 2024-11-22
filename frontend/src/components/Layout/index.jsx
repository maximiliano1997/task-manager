import { Outlet } from 'react-router-dom'
import NavBar from './Navbar'
import Footer from './Footer'




export function Layout() {

    return (
        <div className="layout-grid">
            <NavBar />
            <div>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}