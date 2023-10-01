"use client"
import { useRouter } from 'next/navigation'
import Logo from './components/Logo'
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push('/login')
    }, 5000)
    return () => clearTimeout(timeout)
  })
  return (
    <div className='h-full w-full grid place-items-center'>
      <Logo 
      loading
      primary={false}
      />
    </div>
  )
}
