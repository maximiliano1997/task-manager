import { useState } from 'react'
import { useUserContext, useTaskContext, useResponseContext } from '../../contexts/index.jsx'
import { Form, Input, Button } from 'antd'
import { useNavigate, useParams } from 'react-router-dom'

const { TextArea } = Input

export function UpdateTask() {
    const { user } = useUserContext() // contexto de usuario
    const { tasks, updateTask } = useTaskContext() // contexto de tareas
    const { setResponseStatus } = useResponseContext()

    const navigate = useNavigate()

    // estas 3 lineas siguientes son para trabajar
    // y display los datos de la tarea a ser actualizada
    const { id } = useParams()
    const taskToUpdate = tasks.find(t => t._id == id)
    console.log(JSON.stringify(taskToUpdate), id)



    const [taskUpdate, setTaskUpdate] = useState({
        name: '',
        description: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('olololololo')

        const payload = {
            name: taskUpdate.name || taskToUpdate.name,
            description: taskUpdate.description || taskToUpdate.description,
            completed: taskToUpdate.completed,
        }


        const successTaskUpdate = updateTask(id, payload)

        if (successTaskUpdate) {
            console.log('redireccionando')

            setResponseStatus({ status: successTaskUpdate.message })
            const redirectTo = '/success'
            navigate(redirectTo, { replace: true })
        }

        console.log(successTaskUpdate)
    }


    return (
        <div className="flex place-items-center place-content-center w-[100%] h-[100%] ">
            <div className="flex flex-col justify-between w-[50%] h-[60%] place-items-center place-content-center">
                <div className="w-full bg-blue-300 h-[15%] flex justify-center place-items-center rounded-t-xl">
                    <h1 className="text-[30px] text-white font-semibold">¡Make your changes {user.name}!</h1>
                </div>
                <Form className="">
                    <h1 className="text-[20px] font-bold text-gray-400">Name of your Task:</h1>
                    <Form.Item label="" name="name" rules={[
                        {
                            required: true,
                            message: 'Please input your Task Name'
                        }
                    ]}>
                        <Input className="w-[400px] placeholder-black" onChange={(e) => setTaskUpdate({ ...taskUpdate, name: e.target.value })} placeholder={taskToUpdate.name} />
                    </Form.Item>

                    <p className="text-[20px] font-bold text-gray-400">Description of the Task:</p>
                    <Form.Item label="" name="description" rules={[
                        {
                            required: true,
                            message: 'Please input the Task Description'
                        }
                    ]} >
                        <TextArea className="w-[400px] placeholder-black"
                            showCount
                            maxLength={100}
                            // onChange={onChange}
                            style={{
                                height: 120,
                                resize: 'none',
                            }}
                            placeholder={taskToUpdate.description}
                            onChange={(e) => setTaskUpdate({ ...taskUpdate, description: e.target.value })}

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