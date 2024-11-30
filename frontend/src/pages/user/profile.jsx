import React, { useEffect } from 'react'
import { useUserContext } from '../../contexts/userContext'
import { Button } from 'antd'
import { Link, useNavigate } from 'react-router-dom'




export function Profile() {
    const { user, setUser, readUser, deleteUser } = useUserContext()

    useEffect(() => {
        readUser('http://172.23.125.95:3000/api/v1/userProfile')
            .then((response) => setUser(response))
            .catch(error => console.log(error))
    }, [])

    console.log(user, 'here')


    const navigate = useNavigate()
    const handleUserDeleteSubmit = () => {
        const redirectTo = '/success'
        deleteUser(user._id)

        navigate(redirectTo, { replace: true })
    }


    return (
        <div className="flex place-items-center place-content-center w-[100%] h-[100%]">
            <div className=" max-w-4xl w-[100%] p-6 mx-auto mt-12 bg-white rounded-lg  hover:shadow-yellow-300 hover:shadow-lg0 border-2 border-blue-600 border-t-green-600 border-l-red-600 border-b-fuchsia-600">
                {/* Sidebar */}
                <div className="flex flex-col md:flex-row">
                    <div className="pr-6 mb-6 border-r border-gray-300 md:w-1/4 md:mb-0">
                        <h2 className="mb-4 text-lg font-semibold text-[30px]">Account Panel</h2>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-700 hover:text-blue-500 text-[18px] font-semibold">Profile options: </a>
                            </li>
                            <li>
                                <Link to={`edit/${user._id}`}>
                                    <Button href="#" className="text-[20px] text-green-700 hover:text-blue-500"> Update Profile</Button>
                                </Link>
                            </li>
                            <li>
                                <Button onClick={() => handleUserDeleteSubmit()} href="#" className="text-[20px] text-red-700 hover:text-blue-500">Delete Account</Button>
                            </li>
                        </ul>
                    </div>

                    {/* Profile Details */}
                    <div className="p-4 md:w-3/4">
                        {/* Profile Header */}
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/10337/10337609.png"
                                    alt="User Avatar"
                                    className="w-16 h-16 mr-4 rounded-full"
                                />
                                <h1 className="text-xl font-semibold">@{user.name}</h1>
                            </div>
                            <a href="#" className="text-sm text-blue-500 hover:underline">Log Out</a>
                        </div>

                        {/* Email Addresses Section */}
                        <div className="mb-6">
                            <h2 className="pb-2 mb-4 text-lg font-semibold border-b border-gray-300">Email addresses</h2>
                            <div className="space-y-2">
                                <div className='flex justify-center gap-5'>
                                    <span className="block text-[20px] font-extralight">{user.email}</span>
                                    <span className="px-2 py-1 text-xs text-white bg-green-500 rounded">Active</span>
                                </div>
                            </div>
                            <a href="#" className="block mt-2 text-sm text-blue-500 hover:underline">+ Add email address</a>
                        </div>

                        {/* Phone Number Section */}
                        <div className="mb-6">
                            <h2 className="pb-2 mb-4 text-lg font-semibold border-b border-gray-300">Phone number</h2>
                            <div className="space-y-2">
                                <div>
                                    <span className="block font-medium">+1 (555) 123-4567</span>
                                    <span className="px-2 py-1 text-xs text-blue-500 bg-blue-100 rounded">Primary</span>
                                </div>
                            </div>
                            <a href="#" className="block mt-2 text-sm text-blue-500 hover:underline">+ Add phone number</a>
                        </div>

                        {/* Connected Accounts Section */}
                        <div>
                            <h2 className="pb-2 mb-4 text-lg font-semibold border-b border-gray-300">Number of Tasks</h2>
                            <div>
                                <span className="flex items-center space-x-2">
                                    <img
                                        src="https://via.placeholder.com/20"
                                        alt="Google Logo"
                                        className="w-5 h-5"
                                    />
                                    <span className="font-medium">Feaute not available yet</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )

}
