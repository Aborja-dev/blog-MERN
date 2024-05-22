import { icons } from "@/constants";
import { useState } from "react";

const Dropdown = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <a href="/">Page</a>
            <button className="relative" onClick={() => setOpen(!open)}>
                <img src={icons.DROPDOWN} className='w-2 h-2' alt="" />
            </button>
            <div className={`
            absolute bg-slate-100 p-3 pr-8 left-0 top-[40px]
            ${open|| 'hidden'}
            `} >
                    <ul>
                        <li>About</li>
                        <li>Blogs</li>
                    </ul>
                </div>
        </>
    )
}

export default Dropdown
