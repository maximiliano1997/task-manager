import React, { useState, useEffect } from 'react'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { Button, Checkbox, Form, Input, Flex } from 'antd'
// import { logoHero } from '../../../public/img/taskmanager'

// import { loginUser } from '../../services/api/users'
import { useNavigate, Link } from 'react-router-dom'
import { useUserContext } from '../../contexts/userContext'



export function Login() {
    const { loginUser } = useUserContext()
    const navigate = useNavigate()

    useEffect(() => {
        localStorage.removeItem('authToken')
    }, [])

    const onFinish = (values) => {
        console.log('Reveiced values of form: ', values)
    }

    const [loginUserData, setLoginUserData] = useState({
        email: '',
        password: '',
    }
    )

    const handleLoginSubmit = async (e) => {
        e.preventDefault()
        console.log('Handling Login Submit')

        const payload = {
            email: loginUserData.email,
            password: loginUserData.password,
        }

        console.log(payload)

        const successLogin = await loginUser(payload)

        if (successLogin) {
            const redirectTo = '/'
            console.log(successLogin)

            localStorage.setItem('authToken', successLogin.data.token)
            localStorage.setItem('authPass', loginUserData.password)
            localStorage.setItem('authRole', (successLogin.data.user.role)) // cuidado al parsear mal con JSON.stringify o JSON.parse

            navigate(redirectTo, { replace: true })
        }
    }

    return (
        <div className="flex-col justify-center w-full h-full place-items-center"
        >
            <img src='/img/taskmanager.png' alt="" className="my-24" />

            <div className="bg-blue-200 shadow-md shadow-blue-300 rounded-xl w-[700px] h-[400px] flex justify-center place-items-center">
                <Form className='w-[400px]'
                    name="login"
                    initialValues={{
                        remember: true,
                    }}
                    style={{
                        maxWidth: 360,
                    }}
                    onFinish={onFinish}
                >

                    <h1 className="text-[20px] mb-8 font-bold text-center">Login with your account</h1>

                    <Form.Item
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Email!',
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined />} placeholder="Email" onChange={(e) => setLoginUserData({ ...loginUserData, email: e.target.value })} />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                        ]}
                    >
                        <Input prefix={<LockOutlined />} type="password" placeholder="Password" onChange={(e) => setLoginUserData({ ...loginUserData, password: e.target.value })} />
                    </Form.Item>
                    <Form.Item>
                        <Flex justify="space-between" align="center">
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>
                            <a href="">Forgot password</a>
                        </Flex>
                    </Form.Item>

                    <Form.Item>
                        <Button block type="primary" htmlType="submit" onClick={handleLoginSubmit}>
                            Log in
                        </Button>
                        or <Link to="/register">Register now!</Link>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}
