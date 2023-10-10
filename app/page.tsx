"use client"

import Menu from "./components/Menu";
import Image from "next/image";
import FiltersBar from "./components/FiltersBar";
import FilterOption from "./components/FilterOption";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import CountrySelect from "./components/Select/CountrySelect";
import StateSelect from "./components/Select/StateSelect";
import CitySelect from "./components/Select/CitySelect";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";
import Button from "./components/Button";
import ControlButtons from "./components/ControlButtons";
import ImagesCarrousel from "./components/ImagesCarrousel";
import { agePreferences, genderPreferences, persons } from "./data";
import { useEffect, useState } from "react";
import HomeModal from "./components/HomeModal";
import useHomeModal from "./hooks/useHomeModal";

export interface FilterOptionInterface {
  value: string,
  label: string,
}

export default function Home() {
  const router = useRouter();
  const params = useSearchParams();
  const [isLogged,setIsLogged] = useState(false)
  const [isLoading,setIsLoading] = useState(false)
  const homeModal = useHomeModal()
  const {
    handleSubmit,
    setValue,
    reset,
    watch
  } = useForm<FieldValues>({
    defaultValues:{
      genre: [],
      age: [],
      country:null,
      state:null,
      city:null,
    }
  })

  const setCustomValue = (name:string,value:any) => {
    setValue(name,value,{
      shouldDirty:true,
      shouldTouch:true,
      shouldValidate:true
    })
  }
  
  const age = watch('age')
  const genre = watch('genre')
  const country = watch('country')
  const state = watch('state')
  const city = watch('city')

  const onSubmit:SubmitHandler<FieldValues> = (data) => {
    let currentQuery = {};
    if(params){
        currentQuery = qs.parse(params.toString())
    }
    const updatedQuery:any = {
      ...currentQuery,
      age: age?.map((option:FilterOptionInterface) => option.value),
      genre: genre?.map((option:FilterOptionInterface) => option.value),
      country: country?.value,
      state: state?.isoCode,
      city: city?.name,
    }
    const url = qs.stringifyUrl({
      url: '/',
      query: updatedQuery
      },{
       skipNull: true
    })
    reset()
    router.push(url)
  }
  const onContinue = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setIsLogged(true)
    },5000)
  }
  if(!isLogged) return (
    <div className="w-full h-full grid place-items-center">
      <Button 
      actionLabel="Open Modal"
      onAction={homeModal.onOpen}
      primary
      />
    <HomeModal
    onSubmit={onContinue}
    loading={isLoading}
    />
    </div>
  )
  return (
    <div className='h-full w-full flex justify-center'>
      <Menu />
      <div className="w-full md:w-[40rem] flex flex-col items-center py-8 gap-8 px-4 md:px-0 md:mb-20">
        <FiltersBar 
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}>
          <FilterOption
          label="Age"
          placeholder="Select your age preferences"
          value={age}
          options={agePreferences} 
          onChange={(value) => setCustomValue('age',value)}
          />
          <FilterOption
          label="Genre"
          placeholder="Select your gender preferences"
          value={genre}
          options={genderPreferences}
          onChange={(value) => setCustomValue('genre',value)}
          />
          <FilterOption label="Location">
                  <CountrySelect 
                  country={country}
                  onChange={(value) => {
                      setCustomValue('country',value)
                      setCustomValue('state',null)
                      setCustomValue('city',null)
                  }}
                  />
                  <StateSelect 
                  country={country}
                  state={state}
                  onChange={(value) => {
                      setCustomValue('state',value)
                      setCustomValue('city',null)
                  }}
                  />
                  <CitySelect 
                  country={country}
                  state={state}
                  city={city}
                  onChange={(value) => setCustomValue('city',value)}
                  />
          </FilterOption>
        </FiltersBar>
        <ImagesCarrousel 
        persons={persons}
        />
        <ControlButtons />
      </div>
    </div>
  )
}
