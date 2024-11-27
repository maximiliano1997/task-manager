import React from 'react'
import { Link } from 'react-router-dom'
import { Button, List } from 'antd'

export function About() {
    return (
        <div className="flex h-full place-items-center place-content-center align-center">
            <div className="max-w-4xl w-[100%] p-6 mx-auto mt-12 bg-white rounded-lg  hover:shadow-red-300 hover:shadow-lg border-2 border-blue-600 border-t-green-600 border-l-red-600 border-b-fuchsia-600 flex-col place-items-left p-10">
                <h1 className="text-blue-500 text-[45px] font-semibold">About</h1>
                <p className="text-black text-[15px] font-semibold">Welcome to Task Manager, your ultimate productivity companion. <br /><br />

                    At TaskFlow, we understand how challenging it can be to stay organized and manage your daily tasks in a busy world. That’s why we’ve created a platform that empowers individuals, teams, and businesses to streamline their workflows, track progress, and achieve goals efficiently.</p><br /><br />

                <h2 className="text-yellow-500 text-[25px] font-semibold">Our Mission</h2>
                <p className="text-[15px] font-extralight text-gray-600">Our mission is to simplify task management by providing a seamless, user-friendly tool that enhances focus, accountability, and collaboration. We aim to help you turn ideas into actions and plans into achievements.</p>
                <br />
                <hr />
                <br />
                <h2 className="text-green-500 text-[25px] font-semibold">What we offer:</h2>
                <List className='text-[15px] font-semibold text-gray-600'>
                    <li className='m-4'>
                        <p> &#8226;
                            Simple Task Organization: Break down your projects into manageable steps with intuitive task creation and categorization.
                        </p>
                    </li>
                    <li className='m-4'>
                        <p> &#8226;
                            Collaboration Made Easy: Assign tasks, set deadlines, and communicate effortlessly with your team.
                        </p>
                    </li>
                    <li className='m-4'>
                        <p> &#8226;
                            Progress Tracking: Visualize your progress through detailed reports and tracking tools.
                        </p>
                    </li>
                    <li className='m-4'>
                        <p> &#8226;
                            Customizable Features: Tailor the platform to fit your workflow with flexible settings and integrations.
                        </p>
                    </li>
                </List>
                <br />
                <hr />
                <br />
                <h2 className="text-orange-500 text-[25px] font-semibold">Why Choose Us?</h2><br />
                <p className='text-[15px] font-extralight text-gray-600'>We believe in creating tools that adapt to you, not the other way around. Whether you're an individual striving to conquer your to-do list or a team working on a large-scale project, TaskFlow is here to help you stay on top of what matters most.</p>
                <br />
            </div>
        </div>
    )
}
