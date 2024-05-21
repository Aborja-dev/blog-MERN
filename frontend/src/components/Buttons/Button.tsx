import React from 'react'

const Button = ({children}) => {
  return (
    <button className="w-full py-3 bg-blue-600 text-white font-bold rounded-xl">
      {children}
    </button>
  )
}

export default Button
