import PillButton from '@components/Buttons/PillButton'
import { icons } from "@/constants";
import { useState } from 'react';
const NavigationMenu = () => {
    const [open, setOpen] = useState(false)
    return (
        <nav className="flex justify-end items-center gap-8">
            <div className='hidden'>
                <ul className="flex gap-4">
                    <li className="font-semibold"><a href="/">Home</a></li>
                    <li className="font-semibold"><a href="/">Articles</a></li>
                    <li className="font-semibold"><a href="/">Page</a></li>
                    <li className="font-semibold"><a href="/">Pricing</a></li>
                </ul>
                <PillButton />
            </div>
            <button className='pr-6' onClick={() => setOpen(!open)}>
                <img src={icons.MENU_LOGO} className='w-10 h-10' alt="" />
            </button>
            <div className={`w-full h-screen absolute top-0 bg-blue-950 mt-20 ${open || 'hidden'}`}>
            <div className='w-auto h-full'>
                <ul className="flex flex-col h-4/5 justify-center gap-6 text-white font-semibold">
                    <li className="text-center"><a href="/">Home</a></li>
                    <li className="text-center"><a href="/">Articles</a></li>
                    <li className="text-center"><a href="/">Page</a></li>
                    <li className="text-center"><a href="/">Pricing</a></li>
                    <div className='flex justify-center'>
                        <PillButton />
                    </div>
                </ul>
            </div>
                
            </div>
        </nav>

    )
}

export default NavigationMenu
