import React, { useState } from 'react'
import { FieldValues, SubmitHandler, UseFormHandleSubmit } from 'react-hook-form'
import { AiOutlineMenu } from 'react-icons/ai'
import { RxCross2 } from 'react-icons/rx'

interface FiltersBarProps {
  children: React.ReactNode,
  onSubmit: SubmitHandler<FieldValues>,
  handleSubmit: UseFormHandleSubmit<FieldValues, undefined>,
}

const FiltersBar = ({children,onSubmit,handleSubmit}: FiltersBarProps) => {
    const [filtersOpen,setFiltersOpen] = useState(false)
  return (
    <div className="flex flex-col gap-4 w-full bg-primarry text-white rounded-xl p-4">
          <div className="w-full flex items-center justify-between">
            <div>Filtres</div>
            {filtersOpen ? (
              <RxCross2
              className="cursor-pointer"
              onClick={() => setFiltersOpen(false)}
              size={20}
              />
            ) : (
            <AiOutlineMenu 
            className="cursor-pointer"
            onClick={() => setFiltersOpen(true)}
            size={20}
            />
            )}
            
          </div>
          {filtersOpen &&  (
            <form className='flex flex-col'
            onSubmit={() => {
                handleSubmit(onSubmit)
                setFiltersOpen(false)
            }}>
                {children}
            </form>
          )}
    </div>
  )
}

export default FiltersBar