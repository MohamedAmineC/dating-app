"use client"

import React from 'react'
import { IconType } from 'react-icons'

interface MenuIconProps {
    icon: IconType,
    onClick: () => void,
    active: boolean
}

const MenuIcon = ({icon:Icon,onClick,active}:MenuIconProps) => {
  return (
    <div className={`w-full h-full grid place-items-center cursor-pointer hover:text-neutral-800 transition
    ${active && 'text-neutral-800'}`}
    onClick={onClick}>
            <Icon 
            size={24}
            />
       </div>
  )
}

export default MenuIcon