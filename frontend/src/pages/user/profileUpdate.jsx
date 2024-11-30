import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Input, Button, Checkbox } from 'antd'
import { Link } from 'react-router-dom'
import { useUserContext } from '../../contexts/userContext'
import { useResponseContext } from '../../contexts/reponseStateContext'



const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};



export const ProfileUpdate = () => {
    const { user, updateUser } = useUserContext()
    const { setResponseStatus } = useResponseContext()
    const navigate = useNavigate()

    const authPass = localStorage.getItem('authPass') // <-- Useful but not safe to do (bcyptjs issue)


    const [userUpdate, setUserUpdate] = useState({
        name: '',
        email: '',
        password: authPass,
    })





    console.log(authPass)
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(userUpdate.name)
        const payload = {
            name: userUpdate.name || user.name,
            email: userUpdate.email || user.email,
            password: authPass,
        }
        console.log(payload)

        // if (userUpdate.name) {
        //     payload.name = userUpdate.name
        // }
        // if (userUpdate.email) {
        //     payload.name = userUpdate.email
        // }
        // if (userUpdate.password) {
        //     payload.name = userUpdate.password
        // }

        console.log(payload)

        const successUserUpdate = await updateUser(user._id, payload)

        if (successUserUpdate) {
            console.log('Redireccionando')


            localStorage.removeItem('authPass')
            localStorage.setItem('authPass', payload.password)

            setResponseStatus({ status: successUserUpdate.message })
            const redirectTo = '/success'
            navigate(redirectTo, { replace: true })
        }

        console.log(successUserUpdate, 'loca loca')
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
                                <Button href="#" className="text-[20px] text-green-700 hover:text-blue-500"> Update Profile</Button>
                            </li>
                            <li>
                                <Button href="#" className="text-[20px] text-red-700 hover:text-blue-500">Delete Account</Button>
                            </li>
                        </ul>
                    </div>

                    {/* Profile Details */}
                    <div className="p-4 bg-white md:w-3/4">
                        {/* Profile Header */}
                        <Form className=""
                            name="basic"
                            labelCol={{
                                span: 8,
                            }}
                            wrapperCol={{
                                span: 16,
                            }}
                            style={{
                                maxWidth: 600,
                            }}
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                        >

                            <h1 className="text-[20px] mb-8 font-bold text-center">Update your account</h1>

                            <Form.Item
                                label="Username"
                                name="username"
                                rules={[
                                    {
                                        required: false,
                                        message: 'Please input your username!',
                                    },
                                ]}
                            >
                                <Input className="placeholder-black" onChange={(e) => setUserUpdate({ ...userUpdate, name: e.target.value })} placeholder={user.name} />
                            </Form.Item>

                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[
                                    {
                                        required: false,
                                        message: 'Please input your email!',
                                    },
                                ]}
                            >
                                <Input className="w-[100%] placeholder-black" onChange={(e) => setUserUpdate({ ...userUpdate, email: e.target.value })} placeholder={user.email} />
                            </Form.Item>


                            <Form.Item
                                label="Password"
                                name="password"
                                placeholder="hola"
                                rules={[
                                    {
                                        required: false,
                                        message: 'Please input your password!',
                                    },
                                ]}
                            >
                                <Input.Password className="" onChange={(e) => setUserUpdate({ ...userUpdate, password: e.target.value })} placeholder={userUpdate.password} />
                            </Form.Item>

                            <Form.Item label={null} className="">
                                <button className='text-[18px] w-44 h-10 bg-green-400 rounded hover:bg-green-700 mr-6'
                                    onClick={(e) => handleSubmit(e)}>Update Account</button>
                                <Link to="/profile"><Button type="default" danger className=" text-[18px] w-44 h-10 0 rounded">Cancel X</Button></Link>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        </div >
    )
}
