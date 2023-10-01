"use client"

interface ButtonProps {
    primary?: boolean,
    outline?: boolean,
    actionLabel: string,
    onAction: () => void,
    small?: boolean,
 }

const Button = ({primary,outline,actionLabel,onAction,small=false}:ButtonProps) => {
  return (
    <button className={`${small ? 'px-2 py-4' : 'px-8 py-4'} rounded-full 
    ${primary && 'bg-primarry border-white border-2 text-white hover:text-neutral-800 hover:border-neutral-800 transition'} 
    ${outline && 'bg-white text-primarry border-2 border-white hover:text-neutral-800 hover:border-neutral-800 transition'}`}
        onClick={onAction}
        >
            {actionLabel}
    </button>
  )
}

export default Button