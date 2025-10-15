import { useState } from "react"
import { Button } from "antd"

import Landing from '../../public/home-landing.html'


export function Home() {
    const [counter, setCounter] = useState(0)

    const token = localStorage.getItem('authToken')

    return (
        <>
            <div className="h-[100vh] w-[100%] flex-col justify-center place-items-center relative bg-transparent overflow-y-hidden scroll-m-0">

                <button className="font-bold px-9 rounded-b-xl bg-[linear-gradient(43deg,_#4158D0_0%,_#C850C0_46%,_#FFCC70_100%)] text-white hover:text-purple-700 hover:bg-orange-400 text-[30px] bg-transparent w-[800px]">TRY OUR DEMO</button>
                <iframe className="z-10 h-[100%] w-[100%]"
                    src="/home-landing.html"
                    title="My HTML Content" />
            </div >

        </>
    )
}

// background - color: #4158D0;
// background - image: linear - gradient(43deg, #4158D0 0 %, #C850C0 46 %, #FFCC70 100 %);
