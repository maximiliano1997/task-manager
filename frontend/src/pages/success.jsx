import React from 'react'
import { useResponseContext } from '../contexts/reponseStateContext'
import { Link } from 'react-router-dom'
import { Button } from 'antd'
import { CheckOutlined } from '@ant-design/icons'

export function Success() {
    const { responseStatus } = useResponseContext()
    console.log(responseStatus)

    return (
        <div className="flex h-full place-content-center place-items-center">
            <div className="max-w-4xl w-[100%] p-6 mx-auto mt-12 bg-white rounded-lg  hover:shadow-yellow-300 hover:shadow-lg border-2 border-blue-600 border-t-green-600 border-l-red-600 border-b-fuchsia-600 flex-col place-items-center p-10">
                <CheckOutlined className='text-[55px] text-green-600' />

                <h1 className="text-green-600 text-[45px] font-semibold">¡Success!</h1>
                <p className="text-black text-[35px] font-semibold">{responseStatus.status}</p>
                <Link to="/profile" className="text-white text-[25px] font-semibold"><Button type="primary">Go back to Profile</Button></Link>
            </div>
        </div>
    )
}
{/* <div className=" max-w-4xl w-[100%] p-6 mx-auto mt-12 bg-white rounded-lg  hover:shadow-yellow-300 hover:shadow-lg0 border-2 border-blue-600 border-t-green-600 border-l-red-600 border-b-fuchsia-600"></div> */ }