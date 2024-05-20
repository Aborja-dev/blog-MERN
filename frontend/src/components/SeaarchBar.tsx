import { icons } from "@/constants";

import React from 'react'

const SeaarchBar = () => {
  return (
    <div className="flex items-center space-x-2 p-4 rounded-2xl shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] mb-3">
            <figure className="w-6 h-6 mx-2">
                <img src={icons.SEARCHBAR_ICON} alt="" />
            </figure>
            <input type="text" className="placeholder:text-slate-500 placeholder:font-bold placeholder:italic focus:outline-none" placeholder="Search article" />
        </div>
  )
}

export default SeaarchBar
