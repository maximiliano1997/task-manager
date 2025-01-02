import React, { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { useAdminContext } from '../../contexts/adminContext';
import { FilterOutlined } from '@ant-design/icons'
import { TaskPanelList } from './taskPanelSection/TaskPanelList'
import { Pagination } from '../../components/tasks/Pagination'




export function TaskPanelSection() {
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
            case 'All Tasks':
                console.log('0')
                setFilter({ ...filter, statusFilter: 'all' })
                return '';
            default:
                return '';
        }
    }


    return (
        <div className="">

            <div className="flex justify-between mt-16 bg-blue-600 rounded-t-lg ">
                <form action="" className="flex " onSubmit={(e) => e.preventDefault()}>
                    <label htmlFor="search"> </label>
                    <input type="search" name="search" id="search" className="w-[300px] h-[30px] border-2 rounded p-2 m-2" placeholder='Search here .....' onChange={(e) => setFilter({ ...filter, search: e.target.value.toLowerCase() })} />
                    <div className='flex h-auto gap-5 p-2 m-2 bg-white rounded '>
                        <FilterOutlined className="text-[20px] text-black" />
                        <select className="text-[12px] w-[200px]  bg-white text-black font-semibold" onChange={(e) => statusFilterHandler(e.target.value)}>
                            <option disabled className="font-semibold text-black bg-white-500">
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
                <span></span>
            </div>

            <div className="relative overflow-x-auto shadow-md">
                <table className="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-blue-600 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Description
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Status
                            </th>
                            <th scope="col" className="px-6 py-3">
                                By User
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Actions
                            </th>
                        </tr>
                    </thead>

                    <TaskPanelList filter={filter} />

                </table>
            </div>
            <div className="flex justify-between p-2 bg-blue-600 rounded-b-lg">
                <Pagination />
            </div>

        </div>
    )
}
