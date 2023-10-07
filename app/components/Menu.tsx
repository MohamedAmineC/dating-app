"use client"

import MenuIcon from "./MenuIcon"
import { usePathname, useRouter } from "next/navigation"
import { AiOutlineHome } from "react-icons/ai"
import { CgProfile } from "react-icons/cg"
import { BsSearch } from "react-icons/bs"
import { IoSettingsOutline } from "react-icons/io5"

const Menu = () => {
    const router = useRouter();
    const pathname = usePathname();
  return (
    <div className="w-full md:w-[40rem] md:mb-10 md:rounded-lg md:bg-primarry md:text-white  py-4 flex items-center justify-between fixed bottom-0 text-primarry border-t-2 border-primarry">
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
        onClick={() => router.push('/settings')}
        active={pathname === '/settings'}
       />
    </div>
  )
}

export default Menu