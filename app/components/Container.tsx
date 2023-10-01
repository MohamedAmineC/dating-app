"use client"

interface ContainerProps {
    children: React.ReactNode,
    className?: string
}

const Container = ({children,className}:ContainerProps) => {
  return (
    <div className={`w-full h-full md:w-[40rem]
    ${className}`}>
        {children}
    </div>
  )
}

export default Container