import { icons } from "@/constants";
import { useState } from "react";

const Dropdown = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <button className="relative flex gap-2 items-center" onClick={() => setOpen(!open)}>
                <p>Page</p>
                <img src={icons.DROPDOWN} className='w-2 h-2' alt="" />
            </button>
            <div className={`
            absolute bg-slate-100 rounded-md p-3 pr-8 left-0 top-[40px] transition-opacity duration-200
            ${open ? 'opacity-100' : 'opacity-0'}
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
