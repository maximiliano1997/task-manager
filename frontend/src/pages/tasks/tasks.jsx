import React, { useEffect, useState } from 'react'
import { Button } from 'antd'


import { TaskList } from '../../components/tasks/TaskList'
import { Link } from 'react-router-dom'



export function Tasks() {
    // const [tasksListd, setTasksListed] = useState([])
    // const [selectionType, setSelectionType] = useState('checkbox');



    return (
        <div className="flex h-full place-items-center place-content-center">
            <div className="flex flex-col justify-between h-[70%] w-[65%] place-items-center">
                <section className="w-full bg-blue-200 h-[15%] rounded-t-xl flex justify-between">

                    <div>

                    </div>
                    <Link to="/tasks">
                        <Button variant="solid" className="text-[22px] font-semibold text-white bg-blue-500 opacity-100 m-2" ><Link to='/tasks/create'>+ Add Task</Link></Button>
                    </Link>
                </section>
                <section className="h-[100%] w-[100%]">

                    {/* <Radio.Group onChange={(e) => setSelectionType(e.target.value)} value={selectionType}> */}
                    {/* <Radio value="checkbox">Checkbox</Radio>
                        <Radio value="radio">radio</Radio> */}
                    {/* </Radio.Group> */}
                    {/* <Divider /> */}
                    {/* <Table
                        rowSelection={{
                            type: selectionType,
                            ...rowSelection,
                        }}
                        columns={columns}
                        dataSource={data}
                    /> */}

                    <TaskList />

                </section>
                <section className="w-full text-center bg-blue-500 opacity-30 h-[10%] rounded-b-xl">
                    Task Manager
                </section>
            </div>
        </div >
    )
}
