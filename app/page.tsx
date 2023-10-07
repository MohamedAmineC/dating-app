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

export interface FilterOptionInterface {
  value: string,
  label: string,
}

export default function Home() {
  const router = useRouter();
  const params = useSearchParams();
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
  const agePreferences: FilterOptionInterface[] = [{ value: '18-25', label: '18-25' },
  { value: '25-35', label: '25-35' },
  { value: '35-45', label: '35-45' },
  { value: '45-55', label: '45-55' },
  { value: '55-65', label: '55-65' },
  { value: '65+', label: '65+' }
  ];

  const genderPreferences: FilterOptionInterface[] = [  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
  { value: 'non-binary', label: 'Non-binary' },
  { value: 'transgender', label: 'Transgender' },
  { value: 'other', label: 'Other' }];

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
        <ImagesCarrousel />
        <ControlButtons />
      </div>
    </div>
  )
}
