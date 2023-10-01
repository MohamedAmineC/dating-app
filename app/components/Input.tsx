"use client"

import { useState } from "react"
import {UseFormRegister,FieldValues,FieldErrors} from "react-hook-form"
import { FaEye } from "react-icons/fa"

interface InputProps{
    id:string,
    label:string,
    type?: string,
    disabled?:boolean,
    showPassword?: boolean,
    required?: boolean,
    register: UseFormRegister<FieldValues>,
    errors: FieldErrors,
    checkbox?: boolean
}

const Input:React.FC<InputProps> = ({
    id,label,type="text",disabled,showPassword,required,register,errors,checkbox=false
}) => {
    const [hasValue,setHasValue] = useState(false)
    const [passwordVisible,setPasswordVisible] = useState(false)
    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setHasValue(e.target.value.length > 0)
    }
    const toggleVisibility = () => {
        setPasswordVisible(!passwordVisible)
    }
  return (
    <div className="w-full relative">
        { showPassword && hasValue && (
            <FaEye size={24}
            className="text-primarry absolute top-5 right-2 cursor-pointer"
            onClick={toggleVisibility}
            />
        )}
        {checkbox ? (
            <div className="flex items-center gap-4">
            <input 
            id={id}
            disabled={disabled}
            {...register(id,{required})}
            placeholder=" "
            type={"checkbox"}
            className={`w-6 h-6 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed
            ${errors[id] ? 'border-rose-500' : 'border-neutral-300'}
            ${errors[id] ? 'focus:border-rose-500' : 'focus:border-black'}
            `} /> 
            <label htmlFor={id}>
                {label}
            </label>  
            </div>
        ) : (
            <>
            <input 
            id={id}
            disabled={disabled}
            {...register(id,{required})}
            placeholder=" "
            type={passwordVisible ? 'text' : type}
            className={`peer w-full p-4 pt-6 font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed pl-4
            ${errors[id] ? 'border-rose-500' : 'border-neutral-300'}
            ${errors[id] ? 'focus:border-rose-500' : 'focus:border-black'}
            `}
            onChange={handleInputChange}
            />
            <label htmlFor={id}
            className={`absolute text-md duration-150 transform -translate-y-3 top-5 origin-[0] left-4
            peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
            peer-focus:scale-75 peer-focus:-translate-y-4
            ${errors[id] ? 'text-rose-500' : 'text-zinc-400'}`}>
            {label}
            </label>
            </>
        )}
    </div>
  )
}

export default Input