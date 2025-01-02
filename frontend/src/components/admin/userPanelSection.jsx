import React, { useEffect, useState } from 'react'
import { FilterOutlined } from '@ant-design/icons';
import { UserPanelList } from './userPanelSection/UserPanelList'

export function UserPanelSection() {

    const [filter, setFilter] = useState({
        search: '',
        roleFilter: '',
    })

    const roleFilterHandler = (e) => {
        switch (e) {
            case 'User':
                console.log(filter.roleFilter)
                setFilter({ ...filter, roleFilter: 'USER' })
                break;
            case 'Admin':
                console.log(filter.roleFilter)
                setFilter({ ...filter, roleFilter: 'ADMIN' })
                break;
            default:
                setFilter({ ...filter, roleFilter: '' })
                break;
        }
    }




    // console.log(adminData.tasks)



    return (
        <div>

            <div className="relative flex justify-between bg-blue-600 rounded-t-lg ">
                <form action="" className="">
                    <label htmlFor="search"> </label>
                    <input type="search" name="search" id="search" className="w-[300px] h-[30px] border-2 rounded p-2 m-2" placeholder='Search here .....'
                        onChange={(e) => setFilter({ ...filter, search: e.target.value.toLowerCase() })} />
                    <div className='flex h-auto gap-5 p-2 m-2 bg-white rounded '>
                        <FilterOutlined className="text-[20px] text-black" />
                        <select className="text-[12px] w-[200px]  bg-white text-black font-semibold" onChange={(e) => roleFilterHandler(e.target.value)}>
                            <option disabled className="font-semibold text-black bg-white-500">
                                Choose filter
                            </option>
                            <option>
                                All
                            </option>
                            <option >
                                Admin
                            </option>
                            <option>
                                User
                            </option>
                        </select>

                    </div>
                </form>
                <span></span>
            </div>

            <div className="relative overflow-x-auto shadow-md sm:rounded-b-lg">
                <table className="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-blue-600 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                id
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Role
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <UserPanelList filter={filter} />
                </table>
            </div>

        </div >
    )
}
