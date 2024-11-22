import { Link, Outlet } from 'react-router-dom'

import { Button } from 'antd'

export default function NavBar() {

    return (
        <div className="">
            <nav className="">
                <div className="border-2 shadow-md hover:shadow-gray-300 flex text-[20px] justify-between max-w-screen-xl mx-auto bg-white rounded-b-xl">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <ul className="flex justify-between m-5 w-[500px] ">
                        <li className=''><Link to="/tasks"><Button type="primary" className="shadow-sm shadow-blue-400 text-[20px]">Tasks</Button></Link></li>
                        <li><Link to="/about"><Button type="primary" className="shadow-sm shadow-blue-400 text-[20px]">About us</Button></Link></li>
                        <li><Link to="/contact"><Button type="primary" className="shadow-sm shadow-blue-400 text-[20px]">Contact</Button></Link></li>
                    </ul>
                    <div></div>
                    <ul className="flex justify-between m-5 w-[160px] ">
                        {/* <li><Link>My Profile</Link></li> */}
                        {/* <li><Link>Log Out</Link></li> */}
                        <li><Link to="/login"><Button className="shadow-sm shadow-blue-400 text-[20px] mr-5">Login</Button></Link></li>
                        <li><Link to="/register"><Button className="shadow-sm shadow-blue-400 text-[20px]">Register</Button></Link></li>
                    </ul>
                    <div></div>
                </div>
            </nav >
        </div >
    )
}