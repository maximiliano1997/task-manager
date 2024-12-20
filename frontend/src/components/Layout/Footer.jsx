import { Link } from 'react-router-dom'




export default function Footer() {

    return (
        <div>
            <footer className=" text-[20px]">
                <div className="flex justify-between max-w-screen-xl mx-auto bg-white shadow-inner shadow-blue-100 rounded-t-xl">
                    <ul className="flex m-5">©2024 - Maximiliano Imanol Aguer</ul>
                    <ul className="w-[200px] flex justify-between m-5  ">
                        <li><Link>Privacy</Link></li>
                        <li><Link>Terms.</Link></li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}



