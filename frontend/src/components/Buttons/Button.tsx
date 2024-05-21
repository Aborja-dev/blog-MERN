import React from 'react'

const Button = ({children, className}) => {
  return (
    <button 
    className={`
    w-full py-3 
    bg-blue-600 text-white 
    font-bold 
    rounded-xl 
    ${className}`}>
      {children}
    </button>
  )
}

export default Button
