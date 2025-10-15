import { useState } from 'react'
import { useAdminContext, useResponseContext, useUserContext } from '../../contexts/index.jsx'
import { Form, Input, Button } from 'antd'
import { useNavigate, useParams } from 'react-router-dom'

const { TextArea } = Input

export function UpdateTasks() {
    const { user } = useUserContext()
    const { adminData, updateTasks } = useAdminContext()
    const { setResponseStatus } = useResponseContext()

    console.log(JSON.stringify(adminData.tasks), user)

    const navigate = useNavigate()


    // estas 3 lineas siguientes son para trabajar
    // y display los datos de la tarea a ser actualizada
    const { id } = useParams()
    const taskToUpdate = adminData.tasks.find(t => t._id == id)

    console.log(taskToUpdate)

    const [taskUpdate, setTaskUpdate] = useState({
        name: '',
        description: '',
    })

    console.log(`
        adminData.tasks: ${adminData.tasks}
        taskToUpdate: ${JSON.stringify(taskToUpdate)} and id: ${id}
        `)

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log('testadminupdatetask')

        const payload = {
            name: taskUpdate.name,
            description: taskUpdate.description || taskToUpdate.description,
            completed: taskToUpdate.completed,
        }

        console.log(id, payload)

        const successTaskUpdate = await updateTasks(id, payload)
        console.log(successTaskUpdate.data)

        if (!successTaskUpdate) {
            return `Error Updating Task ${taskToUpdate.name}: ${successTaskUpdate.message}`
        }

        // const { data } = successTaskUpdate

        setResponseStatus({ status: successTaskUpdate.data.message })
        const redirectTo = '/success'
        navigate(redirectTo, { replace: true })
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
