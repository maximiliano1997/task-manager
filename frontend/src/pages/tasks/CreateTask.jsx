import React, { useState, useEffect } from 'react'
import { useUserContext, useTaskContext } from '../../contexts/index.jsx'
import { Form, Input, Button } from 'antd'
import { useNavigate } from 'react-router-dom'
const { TextArea } = Input


export function CreateTask() {
    const { user, readUser, setUser } = useUserContext()
    const { tasks, createTask } = useTaskContext()

    const [newTask, setNewTask] = useState({
        name: '',
        description: '',
    })

    useEffect(() => {
        readUser('http://172.23.125.95:3000/api/v1/userProfile')
            .then((response) => setUser(response))
            .catch(error => console.log(error))
    }, [])

    const navigate = useNavigate()

    console.log(tasks)

    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log(newTask)

        const payload = {
            name: newTask.name,
            description: newTask.description,
        }

        console.log(payload)

        const successCreationTask = await createTask(payload)

        if (!successCreationTask) {
            return successCreationTask
        }


        const redirectTo = '/tasks'
        navigate(redirectTo, { replace: true })

        return successCreationTask
    }


    return (
        <div className="flex place-items-center place-content-center w-[100%] h-[100%]">
            <div className="flex flex-col justify-between w-[50%] h-[60%] place-items-center place-content-center">
                <div className="w-full bg-blue-300 h-[15%] flex justify-center place-items-center rounded-t-xl">
                    <h1 className="text-[30px] text-white font-semibold">¡Hey {user.name}, Create your Task!</h1>
                </div>
                <Form className="">
                    <h1 className="text-[20px] font-bold text-gray-400">Name of your Task:</h1>
                    <Form.Item label="" name="name" rules={[
                        {
                            required: true,
                            message: 'Please input your Task Name'
                        }
                    ]}>
                        <Input className="w-[400px]" onChange={(e) => setNewTask({ ...newTask, name: e.target.value })} />
                    </Form.Item>

                    <p className="text-[20px] font-bold text-gray-400">Description of the Task:</p>
                    <Form.Item label="" name="description" rules={[
                        {
                            required: true,
                            message: 'Please input the Task Description'
                        }
                    ]} >
                        <TextArea className="w-[400px   ]"
                            showCount
                            maxLength={100}
                            // onChange={onChange}
                            placeholder="disable resize"
                            style={{
                                height: 120,
                                resize: 'none',
                            }}
                            onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                        />
                    </Form.Item>
                </Form>
                <Button variant='default' className="bg-green-400 w-[400px] font-bold text-[18px]" onClick={(e) => handleSubmit(e)}>Submit</Button>
                <div className="w-full bg-blue-300 h-[15%] flex justify-center place-items-center rounded-b-xl">

                </div>
            </div>
        </div>
    )
}
