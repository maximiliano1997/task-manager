import { useState } from 'react'

export const useStatusFilterHandler = (e) => {
    const [filter, setFilter] = useState({
        search: '',
        statusFilter: 'all',
    })

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

