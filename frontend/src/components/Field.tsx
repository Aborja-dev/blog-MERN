import React from 'react'
import { Component } from 'types/types'


const Field: React.FC<Component> = () => {
    return (
        <div 
        className={`
            flex w-full space-x-2 p-4 mb-3
            rounded-2xl shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]
            bg-white items-center
            md:mb-0
            `}
        >
            <input type="text" 
            className={`
            placeholder:text-slate-400 placeholder:font-bold placeholder:italic 
            focus:outline-none`} 
            placeholder="Search article" />
        </div>
    )
}

export default Field
