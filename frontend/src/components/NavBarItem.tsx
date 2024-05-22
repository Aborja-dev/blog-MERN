import React from 'react'

const NavBarItem = ({children}) => {
  return (
    <li className="font-semibold"><a href="/">{children}</a></li>
  )
}

export default NavBarItem
