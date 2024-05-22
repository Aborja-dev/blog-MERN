import React from 'react'

const Button = ({children, className, outline}) => {
  return (
    <button 
    className={`
    w-full py-3 
    ${outline 
      ? 'bg-transparent border-2 border-blue-600 text-blue-600' 
      : 'bg-blue-600 text-white' }
    font-bold 
    rounded-xl 
    ${className}`}>
      {children}
    </button>
  )
}

export default Button
