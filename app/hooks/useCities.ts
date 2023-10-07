import { State,City } from "country-state-city"


const useCities = () => {
    const getStatesOfCountry = (id:string) => {
        return State.getStatesOfCountry(id)
    }
    const getCitiesOfState = (country:string,state:string) => {
        return City.getCitiesOfState(country,state)
    }
    const getStateByCode = (code:string) => {
        return State.getStateByCode(code)
    }
    return {
        getStatesOfCountry,
        getCitiesOfState,
        getStateByCode
    }
}

export default useCities