import React from 'react'

const Field = () => {
    return (
        <div className="flex w-full bg-white items-center space-x-2 p-4 rounded-2xl shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] mb-3">
            <input type="text" className="placeholder:text-slate-400 placeholder:font-bold placeholder:italic focus:outline-none" placeholder="Search article" />
        </div>
    )
}

export default Field
