"use client"

import useCountries from "@/app/hooks/useCountries"
import { ICity, IState } from "country-state-city"
import Select from "react-select"

export type CountrySelectValue = {
  flag: string,
  label: string,
  latlng: number[],
  region: string,
  value: string
}

interface SelectProps {
  country?: CountrySelectValue,
  onChange: (value:CountrySelectValue) => void
}

const CountrySelect = ({country,onChange}:SelectProps) => {
  const {getAll} = useCountries();
  return (
    <Select 
      placeholder="Anywhere"
      isClearable
      options={getAll()}
      value={country}
      onChange={(value) => onChange(value)}
      formatOptionLabel={(option:any) => (
        <div className="flex items-center gap-3">
          <div>
            {option.flag}
          </div>
          <div className="text-black">
            {option.label} 
          </div>
        </div>
      )}
      classNames={{
        control:() => 'p-3 border-2',
        input: () => 'text-lg',
        option: () => 'text-lg'
      }}
      theme={(theme) => ({
        ...theme,
        borderRadius: 6,
        colors:{
          ...theme.colors,
          primary: 'black',
          primary25: '#E44949'
        }
      })}
    />
  )
}

export default CountrySelect