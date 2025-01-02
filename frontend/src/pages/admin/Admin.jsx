import React, { useState } from 'react'
import { Button } from 'antd'

import { TaskPanelSection, UserPanelSection } from '../../components/admin/index'



export function Admin() {
    const [panel, setPanel] = useState({
        userPanel: false,
        taskPanel: false,
    })

    // const condRender = () => {
    //     if (panel === 'userPanel')
    //         return 'user'
    //     } else if (panel === 'taskPanel') {
    //         return 'task'
    //     }
    // }


    return (
        <div className="w-full h-[100%]">
            <div className="flex flex-col mt-5 place-content-center place-items-center">
                <p className="font-semibold text-[25px]">Administrator Panel</p>
                <span>
                    <Button onClick={() => setPanel({ userPanel: false, taskPanel: true })}>Task Panel</Button>
                    <Button onClick={() => setPanel({ userPanel: true, taskPanel: false })}>User Panel</Button>
                </span>
            </div>
            <div className="flex flex-col place-items-center place-content-center h-[80%]">
                {/* <h1 className="font-semibold text-[30px]">
                    Welcome to the Administrator Panel
                </h1> */}
                {panel.taskPanel === false && panel.userPanel === false ? <h1 className="text-[30px] font-semibold">Choose something</h1> : ''}
                {panel.taskPanel ? <TaskPanelSection /> : ''}
                {panel.userPanel ? <UserPanelSection /> : ''}
            </div>
        </div>
    )
}