"use client"

import { IconType } from "react-icons"

interface SocialLoginProps {
    icon: IconType,
    onClick: () => void,
}

const SocialLogin = ({icon:Icon,onClick}:SocialLoginProps) => {
  return (
    <div className="w-10 h-10 rounded-full grid place-items-center bg-white hover:scale-110 hover:bg-neutral-800 text-primarry cursor-pointer transition"
    onClick={onClick}>
        <Icon 
            size={24}
        />
    </div>
  )
}

export default SocialLogin