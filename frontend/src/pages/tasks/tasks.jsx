import React, { useEffect, useState } from 'react'
import { Button } from 'antd'
import { FilterOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

// Components
import { TaskList } from '../../components/tasks/TaskList'
import { Pagination } from '../../components/tasks/Pagination'


export function Tasks() {
    // const [tasksListd, setTasksListed] = useState([])
    // const [selectionType, setSelectionType] = useState('checkbox');
    const [filter, setFilter] = useState({
        search: '',
        statusFilter: 'all',
    })

    const statusFilterHandler = (e) => {
        switch (e) {
            case 'Completed Tasks':
                console.log(true)
                setFilter({ ...filter, statusFilter: true })
                return true;
            case 'Pending Tasks':
                console.log(false)
                setFilter({ ...filter, statusFilter: false })
                return false;
                return true;
            case 'All Tasks':
                console.log('0')
                setFilter({ ...filter, statusFilter: 'all' })
                return '';
            default:
                return '';
        }
    }

    return (
        <div className="flex h-full place-items-center place-content-center ">
            <div className="flex flex-col justify-between h-[70%] w-[65%] place-items-center   rounded-xl">
                <section className="w-full bg-gray-600 h-[15%] rounded-t-xl flex justify-between border-2 border-blue-600 border-t-green-600 border-l-red-600 border-b-fuchsia-600">
                    <div>
                        <form action="" onSubmit={(e) => e.preventDefault()} className="flex place-items-center"> {/*preventDefault para que cuando des enter en el search no se renderice la pagina */}
                            <label htmlFor="search"> </label>
                            <input type="search" name="search" id="search" className="w-[300px] h-[30px] border-2 rounded p-2 m-2 " placeholder='Search here .....' onChange={(e) => setFilter({ ...filter, search: e.target.value.toLowerCase() })} />
                            <div className='flex h-auto gap-5 p-2 m-2 bg-blue-600 rounded '>
                                <FilterOutlined className="text-[20px] text-white" />
                                <select className="text-[12px] w-[200px]  bg-blue-600 text-white font-semibold" onChange={(e) => statusFilterHandler(e.target.value)}>
                                    <option disabled className="font-semibold text-black bg-blue-500">
                                        Choose filter
                                    </option>
                                    <option>
                                        All Tasks
                                    </option>
                                    <option >
                                        Completed Tasks
                                    </option>
                                    <option>
                                        Pending Tasks
                                    </option>
                                </select>

                            </div>
                        </form>
                    </div>
                    <div>

                    </div>
                    <Link to="/tasks">
                        <Button variant="solid" className="text-[22px] font-semibold text-white bg-blue-500 opacity-100 m-2" ><Link to='/tasks/create'>+ Add Task</Link></Button>
                    </Link>
                </section>
                <section className="h-[100%] w-[100%] ">

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

                    <TaskList filter={filter} />

                </section>
                <section className="w-full text-center bg-gray-600 h-[10%] rounded-b-xl border-2 border-blue-600 border-t-green-600 border-l-red-600 border-b-fuchsia-600 w-full flex justify-between p-2">
                    <Pagination />
                </section>
            </div>
        </div >
    )
}
