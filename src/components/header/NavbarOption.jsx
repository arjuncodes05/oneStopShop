import React from 'react'
import { NavLink } from 'react-router-dom'

function NavbarOption({to, text}) {
  return (
    <li> 
        <NavLink to={to}
            className={({isActive}) => (
                `lg:px-2.5 md:px-2 lg:py-2 md:py-1.5 flex items-center text-center rounded-full ${isActive ? 'bg-black text-white' : "" }`
            )}
        >{text}</NavLink> 
    </li>
  )
}

export default NavbarOption
