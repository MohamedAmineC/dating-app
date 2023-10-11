"use client"

import MenuIcon from "./MenuIcon"
import { usePathname, useRouter } from "next/navigation"
import { AiOutlineHome } from "react-icons/ai"
import { CgProfile } from "react-icons/cg"
import { BsSearch } from "react-icons/bs"
import { IoSettingsOutline } from "react-icons/io5"
import { useCallback, useEffect, useRef, useState } from "react"
import MenuItem from "./MenuItem"

const Menu = () => {
    const router = useRouter();
    const pathname = usePathname();
    const [IsOpen,setIsOpen] = useState<Boolean>(false);
    const menuRef = useRef<HTMLDivElement>(null)
  
    const handleClickOutside = useCallback((event:MouseEvent) => {
      if(menuRef.current && !menuRef.current.contains(event.target as Node)){
        setIsOpen(false);
      }
    },[])
  
    const toggleOpen = () => {
      setIsOpen((value) => !value);
    }
    useEffect(() => {
      document.addEventListener('click',handleClickOutside)
      return () => {
        document.removeEventListener('click',handleClickOutside);
      }
    },[handleClickOutside])
  return (
    <div className="w-full md:w-[40rem] md:mb-10 md:rounded-lg bg-white z-10 md:bg-primarry md:text-white  py-4 fixed bottom-0 text-primarry border-t-2 border-primarry">
       <div className="flex items-center justify-between relative">
        <MenuIcon 
        icon={AiOutlineHome}
        onClick={() => router.push('/')}
        active={pathname === '/'}
        />
        <MenuIcon 
        icon={BsSearch}
        onClick={() => router.push('/search')}
        active={pathname === '/search'}
        />
        <MenuIcon 
        icon={CgProfile}
        onClick={() => router.push('/profile')}
        active={pathname === '/profile'}
        />
        <MenuIcon 
        icon={IoSettingsOutline}
        onClick={toggleOpen}
        active={pathname === '/settings'}
        ref={menuRef}
        />
        {IsOpen && (
          <div className="absolute rounded-xl shadow-md mr-3 md:mr-10 bg-white text-black overflow-hidden right-0 bottom-12 text-sm">
            <div className="flex flex-col cursor-pointer">
              <MenuItem 
              label="Home"
              onClick={() => router.push('/')}
              />
              <MenuItem
              label="Search"
              onClick={() => router.push('/search')}
              />
              <MenuItem
              label="Profile"
              onClick={() => router.push('/profile')}
              />
              <hr />
              <MenuItem
              label="Log out"
              onClick={() => router.push('/logout')}
              />
            </div>
          </div>
        )}
       </div>
    </div>
  )
}

export default Menu