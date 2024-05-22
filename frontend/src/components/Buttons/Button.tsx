import { Component } from '@/types'
import React from 'react'
interface Props extends Component {
  outline?: boolean
}
const Button: React.FC<Props> = ({children, className, outline}) => {
  return (
    <button 
    className={`
    w-full py-3 
    ${outline 
      ? 'bg-transparent border-2 border-blue-600 text-blue-600' 
      : 'bg-blue-600 text-white hover:brightness-110' }
    font-bold 
    rounded-xl 
    ${className}`}>
      {children}
    </button>
  )
}

export default Button
