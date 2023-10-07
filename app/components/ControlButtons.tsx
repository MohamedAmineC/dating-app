"use client"
import React from 'react'
import { AiFillCheckCircle } from 'react-icons/ai'
import { MdCancel } from 'react-icons/md'

const ControlButtons = () => {
  return (
    <div className="w-full flex items-center justify-around">
          <div className="w-10 h-10 rounded-full grid place-items-center text-red-500 cursor-pointer">
            <MdCancel 
            size={50}
            />
          </div>
          <div className="w-10 h-10 rounded-full grid place-items-center text-green-700 cursor-pointer">
            <AiFillCheckCircle 
            size={50}
            />
          </div>
        </div>
  )
}

export default ControlButtons