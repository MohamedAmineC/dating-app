"use client"

import React, { forwardRef } from 'react'
import { IconType } from 'react-icons'

interface MenuIconProps {
    icon: IconType,
    onClick: () => void,
    active: boolean
}

// eslint-disable-next-line react/display-name
const MenuIcon = forwardRef<HTMLDivElement, MenuIconProps>(({icon:Icon,onClick,active},ref) => {
  return (
    <div className={`w-full h-full grid place-items-center cursor-pointer hover:text-neutral-800 transition
    ${active && 'text-neutral-800'}`}
    onClick={onClick}
    ref={ref}>
            <Icon 
            size={24}
            />
       </div>
  )
});

export default MenuIcon