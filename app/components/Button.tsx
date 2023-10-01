"use client"

interface ButtonProps {
    primary?: boolean,
    outline?: boolean,
    actionLabel: React.ReactNode,
    onAction?: () => void,
    small?: boolean,
    type?: "button" | "submit" | "reset",
    disabled?: boolean,
 }

const Button = ({primary,outline,actionLabel,onAction,small=false,type="button",disabled}:ButtonProps) => {
  return (
    <button className={`${small ? 'px-2 py-4' : 'px-8 py-4'} rounded-full grid place-items-center
    ${primary && 'bg-primarry border-white border-2 text-white hover:text-neutral-800 hover:border-neutral-800 transition'}
    ${disabled && 'bg-neutral-300 text-neutral-800 border-2 border-neutral-300 cursor-not-allowed'} 
    ${outline && 'bg-white text-primarry border-2 border-white hover:text-neutral-800 hover:border-neutral-800 transition'}`}
    onClick={onAction}
    disabled={disabled}
    type={type}
    >
      {actionLabel}
    </button>
  )
}

export default Button