"use client"

import { AiFillCheckCircle, AiOutlineMenu } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import Menu from "./components/Menu";
import Image from "next/image";
import { useState } from "react";
import FilterOption from "./components/FilterOption";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import Button from "./components/Button";
import { FiSearch } from "react-icons/fi";

export default function Home() {
  const [filtersOpen,setFiltersOpen] = useState(false)
  const {
    register,
    handleSubmit,
    formState:{
      errors
    },
    reset
  } = useForm<FieldValues>({
    defaultValues:{
      genre: '',
      age: '',
      location:'',
    }
  })

  const onSubmit:SubmitHandler<FieldValues> = (data) => {
    console.log(data)
    reset()
  }
  return (
    <div className='h-full w-full flex justify-center'>
      <Menu />
      <div className="w-full md:w-[40rem] flex flex-col items-center py-8 gap-8 px-4 md:px-0 md:mb-20">
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
          {filtersOpen && (
            <form >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FilterOption 
                register={register}
                errors={errors}
                label="genre"
                />
                <FilterOption 
                register={register}
                errors={errors}
                label="age"
                />
                <FilterOption 
                register={register}
                errors={errors}
                label="location"
                />
              </div>
              <div className="w-full mt-4 flex justify-end">
                <Button 
                type="submit"
                actionLabel="Filtrer"
                onAction={handleSubmit(onSubmit)}
                outline
                />  
              </div>
            </form>
          )}
        </div>
        <div className="w-full border-2 border-primarry p-4 grid place-items-center">
          <Image 
          src={'/images/placeholder.jpg'}
          alt="Placeholder"
          width={500}
          height={500}
          objectFit="contain"
          className="rounded-full"
          />
        </div>
        <div className="w-full flex items-center justify-between">
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
      </div>
    </div>
  )
}
