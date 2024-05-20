import React from 'react'

const Badge = ({children}) => {
  return (
    <li className="text-blue-800 font-bold bg-blue-800 bg-opacity-20 py-2 px-5 rounded-md">
        {children}
    </li>
  )
}

export default Badge
