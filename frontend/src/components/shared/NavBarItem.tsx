import { Component } from '@/types'
import React from 'react'

const NavBarItem: React.FC<Component> = ({children}) => {
  return (
    <>
    <li className={`
    font-semibold group
    `}>
      <a href="/">{children}</a>
      <div className='w-full h-0.5 mt-1 scale-x-0 group-hover:scale-x-100 bg-blue-600  transition-transform duration-150'></div>
      </li>
    </>
  )
}

export default NavBarItem
