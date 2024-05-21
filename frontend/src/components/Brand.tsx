import React from 'react'
import { icons } from "@/constants";
const Brand = () => {
    return (
        <div className="flex items-center gap-2 pl-6">
            <figure className="w-12 h-12">
                <img src={icons.LOGO} alt="logo" />
            </figure>
            <h1 className="text-3xl italic font-semibold hidden md:block"> React MERN Blog </h1>
        </div>
    )
}

export default Brand
