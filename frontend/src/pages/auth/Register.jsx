import { Form, Input, Button, Checkbox } from 'antd'
import React, { useState } from 'react'
import { useUserContext } from '../../contexts/userContext'
import { useNavigate } from 'react-router-dom'


const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};


export function Register() {

    const { createUser } = useUserContext()

    const [newUser, setNewUser] = useState({
        name: "",
        email: "",
        password: "",
    })

    const navigate = useNavigate()


    const handleSubmit = async (e) => {
        e.preventDefault()

        const payload = {
            name: newUser.name,
            email: newUser.email,
            password: newUser.password,
        }

        const successRegistration = await createUser(payload)

        if (successRegistration) {
            const redirectTo = '/'
            console.log('Redireccionando')

            navigate(redirectTo, { replace: true })
        }
    }

    console.log('ver', newUser)


    return (
        <div className="flex-col justify-center h-full place-items-center">


            <img src='/img/taskmanager.png' alt="" className="my-24" />

            <div className="shadow-sm shadow-black h-96 w-[700px] flex flex-col justify-center place-items-center rounded-xl">

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

                    <h1 className="text-[20px] mb-8 font-bold text-center">Register your account</h1>

                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input className="" onChange={(e) => setNewUser({ ...newUser, name: e.target.value })} />
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your email!',
                            },
                        ]}
                    >
                        <Input className="w-[100%]" onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} />
                    </Form.Item>


                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password className="" onChange={(e) => setNewUser({ ...newUser, password: e.target.value })} />
                    </Form.Item>

                    <Form.Item label={null}>
                        <button className='text-[18px] w-24 h-10 bg-green-400 rounded hover:bg-green-700' onClick={handleSubmit}>Register</button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}
