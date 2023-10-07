import { IState } from 'country-state-city'
import React, { useMemo } from 'react'
import { CountrySelectValue } from './CountrySelect'
import useCities from '@/app/hooks/useCities'
import Select from "react-select"

interface StateSelectProps {
    country?: CountrySelectValue | null,
    state?: IState | null,
    onChange: (value:IState) => void
}

const StateSelect = ({country,state,onChange}:StateSelectProps) => {
    const {getStatesOfCountry} = useCities();
    const states = useMemo(() => {
      return getStatesOfCountry(country?.value!)
    },[country?.value,getStatesOfCountry])
    if(states.length === 0) return null
    const formattedStates = states.map((option) => ({
      ...option,
      label: option.name
    }))
  return (
    <Select 
      placeholder="Anywhere"
      isClearable
      options={formattedStates}
      value={state}
      onChange={(value) => onChange(value!)}
      formatOptionLabel={(option) => (
        <div className="flex items-center gap-3 text-black">
            {option.name},
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

export default StateSelect