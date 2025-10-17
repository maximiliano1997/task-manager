import React from 'react'
import { Link } from 'react-router-dom'
import { Button, List } from 'antd'
import { TwitterOutlined, TikTokOutlined, XOutlined, FacebookOutlined, SlackSquareOutlined } from '@ant-design/icons'

export function Contact() {
    return (
        <div className="flex h-full place-items-center place-content-center align-center">
            <div className="flex-col justify-center place-items-center place-content-center max-w-4xl w-[100%] h-[80%] p-6 mx-auto mt-12 bg-white rounded-lg  hover:shadow-red-300 hover:shadow-lg border-2 border-blue-600 border-t-green-600 border-l-red-600 border-b-fuchsia-600 flex-col place-items-left p-10">
                <h1 className="text-blue-500 text-[45px] font-semibold">CONTACT US:</h1>
                <div className="grid grid-cols-3">
                    <Link>
                        <TwitterOutlined className="col-auto text-[190px] text-blue-400" />
                    </Link>
                    <Link>
                        <TikTokOutlined className="text-[190px]" />
                    </Link>
                    <Link>
                        <XOutlined className="text-[190px] " />
                    </Link>
                    <Link>
                        <FacebookOutlined className="text-[190px] text-blue-300" />
                    </Link>
                    <Link>
                        <SlackSquareOutlined className="text-[190px]" />
                    </Link>
                </div>
                <form action="">
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                </form>
            </div>
        </div>
    )
}
