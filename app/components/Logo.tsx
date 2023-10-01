import Image from 'next/image'
import React from 'react'

interface LogoProps {
    loading?: boolean,
    primary?: boolean,
}

const Logo = ({loading,primary}:LogoProps) => {
  return (
    <Image 
    src="/images/logo.png"
    alt="Application Logo"
    width={primary ? 500 : 200}
    height={primary ? 500 : 200}
    className={`rounded-full ${loading && 'animate-bounce'}
    `}
    objectFit='cover'

    />
  )
}

export default Logo