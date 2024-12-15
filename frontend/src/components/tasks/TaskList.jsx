import React, { useEffect, useReducer, useState } from 'react'
import { Tag, Button, Divider, Radio, Table, Input, Checkbox } from 'antd'
import { Link, useNavigate } from 'react-router-dom'

import { useTaskContext } from '../../contexts/index'

let counter = 0;
const counterIndexer = (tasks) => {

    console.log(tasks)
}



// const rowSelection = {
//     onChange: (selectedRowKeys, selectedRows) => {
//         console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
//     },
//     getCheckboxProps: (record) => ({
//         disabled: record.name === 'Disabled User',
//         // Column configuration not to be checked
//         name: record.name,
//     }),
// };



export function TaskList({ filter }) {
    const { tasks, setTasks, readTask, updateTask, deleteTask, pagination } = useTaskContext()

    // const { search } = filter
    const filteredTasks = tasks?.filter((item) => {

        const matchingStatus = filter?.statusFilter === 'all'
            ? true
            : item.completed === filter.statusFilter;
        const matchingSearch = !filter.search
            ? true
            : item.name.toLowerCase().includes(filter.search.toLowerCase())

        return matchingStatus && matchingSearch
    })


    const navigate = useNavigate()

    useEffect(() => {
        readTask()
            .then((response) => setTasks(response.data.tasks.taskExist))
            .catch((error) => console.error(error))
    }, [readTask])

    console.log([tasks])
    counterIndexer(tasks)

    const handleTaskDeleteSubmit = (e, id) => {

        console.log(id)
        deleteTask(id)

        return readTask()
            .then((response) => setTasks(response.data.tasks.taskExist))
            .catch((error) => console.error(error))

    }


    const handleCheckboxSubmit = (e, id) => {

        // Siempre actualizar el renderizado con los datos nuevos en el handler (intentar no hacerlo en las dependencies de useEFfect)
        const updatedTasks = tasks.map((task) =>
            task._id === id
                ? { ...task, completed: e.target.checked }
                : task
        )
        setTasks(updatedTasks)


        const taskToUpdateCheckbox = tasks.find(t => t._id === id)
        console.log(taskToUpdateCheckbox)


        const payload = {
            name: taskToUpdateCheckbox.name,
            description: taskToUpdateCheckbox.description,
            completed: e.target.checked
        }

        const successChecked = updateTask(id, payload)

        if (!successChecked) {
            return 'Error on successChecked: checkbox'
        }
        // window.location.reload()
    }

    const columns = [
        {
            title: 'Check',
            dataIndex: 'check',
            width: '100px',
            render: (text, record) => (record.completed == true ? < Checkbox checked onClick={(e) => handleCheckboxSubmit(e, record._id)
            } className=""></Checkbox > : < Checkbox onClick={(e) => handleCheckboxSubmit(e, record._id)
            }></Checkbox >),
        },
        {
            title: '#',
            dataIndex: 'key',
            render: () => <a>{counter}</a>,
            width: '50px',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            width: '150px',
            render: (text) => <a className="font-bold text-[14px] w-auto">{text}</a>,
        },
        {
            title: 'Desctiption',
            dataIndex: 'description',
            width: '400px',
            render: (text) => <p className="text-[13px] w-auto">{text}</p>
        },
        {
            title: 'Status',
            dataIndex: 'completed',
            width: '200px',
            render: (completed) => completed ? <div className=""><Tag color="green" className="">Completed</Tag></div> : <Tag color="red">Incompleted</Tag>
        },
        {
            title: <p className="text-center">Actions</p>,
            dataIndex: 'actions',
            width: '200px',
            render: (text, record) => <div className="flex justify-evenly"><Button onClick={(e) => handleTaskDeleteSubmit(e, record._id)} className="text-white bg-red-700"><Link>Delete</Link></Button> <Button className="text-black bg-green-200"><Link to={`/tasks/update/${record._id}`}>Update</Link></Button></div>
        },
    ];

    const paginatedData = filteredTasks.slice(
        (pagination.currentPage - 1) * pagination.pageSize,
        pagination.currentPage * pagination.pageSize
    )

    // console.log(test)

    return (
        <>
            <Table size='small' tableLayout="auto" className='h-[10%] w-[100%] table-auto' dataSource={paginatedData} columns={columns} scroll={{ x: "100%", y: '500px' }} pagination={false} />;
        </>
    )
}



