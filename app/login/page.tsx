"use client"

import { useRouter } from "next/navigation";
import Logo from "../components/Logo";
import SocialLogin from "../components/SocialLogin";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import Button from "../components/Button";
import { useEffect, useState } from "react";

const Page = () => {
    const router = useRouter();
    const [loading,setLoading] = useState(true)
    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false)
        }, 5000)
        return () => clearTimeout(timeout)
    })
  return (

    <div className={`h-full w-full grid place-items-center
    ${!loading && 'bg-primarry'}`}>
        {loading ? (
            <Logo 
            loading
            primary={false}
            />
        ) : (
        <>
        <div className="flex flex-col gap-8 items-center" >
            <Logo 
            primary
            />
            <div className="flex flex-col gap-4">
                <Button 
                actionLabel="Créer un compte"
                primary
                onAction={() => {
                    router.push('/register')
                }}
                />
                <Button 
                actionLabel="Se connecter"
                outline
                onAction={() => {
                    router.push('/signin')
                }}
                />
            </div>
            <div className="flex items-center gap-4">
                <SocialLogin 
                icon={FaGoogle}
                onClick={() => {}}
                />
                <SocialLogin
                icon={FaFacebookF}
                onClick={() => {}}
                />
                <SocialLogin 
                icon={FaGithub}
                onClick={() => {}}
                />
            </div>
        </div>
        <div className="self-end mb-4 text-white">
            © 2023 MeetUp. All rights reserved.
        </div>
        </>
           )}

    </div>
  )
}

export default Page