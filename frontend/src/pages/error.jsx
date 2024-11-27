import React from 'react'
import { useResponseContext } from '../contexts/reponseStateContext'
import { Link } from 'react-router-dom'
import { Button } from 'antd'
import { CloseOutlined } from '@ant-design/icons'


export function Error() {
    const { responseStatus } = useResponseContext()
    console.log(responseStatus)

    return (
        <div className="flex h-full place-content-center place-items-center">
            <div className="max-w-4xl w-[100%] p-6 mx-auto mt-12 bg-red-400 rounded-lg  hover:shadow-red-300 hover:shadow-lg border-2 border-blue-600 border-t-green-600 border-l-red-600 border-b-fuchsia-600 flex-col place-items-center p-10">
                <CloseOutlined className='text-[55px] text-red-600 bg-white' />
                <h1 className="text-white text-[45px] font-semibold">¡Sorry but Huston we have an Error!</h1>
                <p className="text-black text-[35px] font-semibold">{responseStatus.status}</p>
                <Link to="/profile" className="text-whit text-[25px] font-semibold"><Button danger type="dashed">Go back to Profile</Button></Link>
            </div>
        </div>
    )
}
