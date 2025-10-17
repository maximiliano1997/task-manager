import { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Tag, Button, Divider, Radio, Table, Input, Checkbox } from 'antd'
import { useAdminContext } from '../../../contexts/adminContext';
import { useTaskContext } from '../../../contexts/taskContext';

export function TaskPanelList({ filter }) {
    const { adminData, setAdminData, readAllTasks, updateTasks, deleteTasks } = useAdminContext()
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


    const handleTaskDeleteSubmit = (e, id) => {
        e.preventDefault()

        console.log('loading')
        deleteTasks(id)

        return readAllTasks()
            .then((response) => setAdminData({ ...adminData, tasks: response.data.tasks }))
            .catch((error) => console.error(error))

    }


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
                            <div className="flex justify-evenly">
                                <Button className="text-white bg-red-700" onClick={(e) => handleTaskDeleteSubmit(e, item._id)}><Link>Delete</Link></Button>
                                <Button className="text-black bg-green-200"><Link to={`/admin/tasks/update/${item._id}`}>Update</Link></Button>
                            </div>
                        </td>
                    </tr>
                )
            })}
        </tbody>
    )
}