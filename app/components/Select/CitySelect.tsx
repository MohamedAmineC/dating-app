import { ICity, IState } from "country-state-city"
import { CountrySelectValue } from "./CountrySelect"
import useCities from "@/app/hooks/useCities"
import Select from "react-select"
import { useMemo } from "react"

interface CitySelectProps {
    country?: CountrySelectValue | null,
    state?: IState | null,
    city?: ICity | null,
    onChange: (value:ICity) => void
}

const CitySelect = ({country,state,city,onChange}:CitySelectProps) => {
    const {getCitiesOfState} = useCities()
    const cities = useMemo(() => {
      return getCitiesOfState(country?.value!,state?.isoCode!)
    },[country?.value,state?.isoCode,getCitiesOfState])
    if(!state || !country || cities.length === 0) return null
    const formattedCities = cities.map((option) => ({
      ...option,
      label: option.name
    }))
  return (
      <Select 
      placeholder="Anywhere"
      isClearable
      options={formattedCities}
      value={city}
      onChange={(value) => onChange(value!)}
      formatOptionLabel={(option) => (
          <div className="text-semibold text-black">
            {option.name}
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
          primary: '#827d7e',
          primary25: '#E44949'
        }
      })}
      />
  )
}

export default CitySelect