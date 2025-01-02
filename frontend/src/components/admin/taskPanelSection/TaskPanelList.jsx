import { useEffect } from 'react'
import { Tag, Button, Divider, Radio, Table, Input, Checkbox } from 'antd'
import { useAdminContext } from '../../../contexts/adminContext';
import { useTaskContext } from '../../../contexts/taskContext';

export function TaskPanelList({ filter }) {
    const { adminData, setAdminData, readAllTasks } = useAdminContext()
    const { pagination } = useTaskContext()

    const filteredTasks = adminData.tasks?.filter((item) => {

        const matchingStatus = filter?.statusFilter === 'all'
            ? true
            : item.completed === filter.statusFilter;
        const matchingSearch = !filter.search
            ? true
            : item.name.toLowerCase().includes(filter.search.toLowerCase())

        return matchingStatus && matchingSearch
    })


    useEffect(() => {
        readAllTasks()
            .then((response) => setAdminData({ ...adminData, tasks: response.data.tasks }))
            .catch((error) => console.log(error))
    }, [])


    const paginatedData = filteredTasks.slice(
        (pagination.currentPage - 1) * pagination.pageSize,
        pagination.currentPage * pagination.pageSize
    )


    return (
        <tbody>
            {paginatedData.map((item) => {

                return (
                    <tr key={item._id} className="border-b odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {item.name}
                        </th>
                        <td className="px-6 py-4">
                            {item.description}
                        </td>
                        <td className="px-6 py-4">
                            {item.completed ? <Tag color="green">Completed</Tag> : <Tag color="red">False</Tag>}
                        </td>
                        <td className="px-6 py-4">
                            {item.createdBy}
                        </td>
                        <td className="px-6 py-4">
                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete  Update</a>
                        </td>
                    </tr>
                )
            })}
        </tbody>
    )
}