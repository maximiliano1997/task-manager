import { useEffect } from 'react'
import { useAdminContext } from "../../../contexts/adminContext"
import { Tag, Button, Divider, Radio, Table, Input, Checkbox } from 'antd'
import { Link, useNavigate } from 'react-router-dom'


export function UserPanelList({ filter }) {
    const { adminData, setAdminData, readAllUsers } = useAdminContext()

    const filteredUsers = adminData.users?.filter((item) => {

        const matchingStatus = !filter?.roleFilter
            ? true
            : item.role === filter.roleFilter;
        const matchingSearch = !filter.search
            ? true
            : item.name.toLowerCase().includes(filter.search.toLowerCase())

        console.log(matchingStatus)
        return matchingStatus && matchingSearch
    })

    useEffect(() => {
        readAllUsers()
            .then((response) => setAdminData({ ...adminData, users: response.data.users }))
            .catch((error) => console.log(error))
    }, [])

    return (
        <tbody>
            {filteredUsers.map((item) => {

                return (
                    <tr key={item._id} className="border-b odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {item.name}
                        </th>
                        <td className="px-6 py-4">
                            {item.email}
                        </td>
                        <td className="px-6 py-4">
                            {item._id ? <Tag color="green">{item._id}</Tag> : <Tag color="red">Unactive</Tag>}
                        </td>
                        <td className="px-6 py-4">
                            {item.role}
                        </td>
                        <td className="grid-flow-col gap-5">


                            <Link>
                                <Button className="w-12 m-2 font-semibold text-white bg-red-500 h-7">Delete</Button>
                            </Link>
                            <Link>
                                <Button className="m-2 font-semibold text-black bg-green-500 h-7 w-14">Update</Button>
                            </Link>
                        </td>
                    </tr>
                )
            })}

        </tbody>

    )
}
