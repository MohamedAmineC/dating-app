"use client"

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form"
import Button from "./Button"
import { FiSearch } from "react-icons/fi"
import Input from "./Input"

interface FilterOptionProps {
    label: string,
    register: UseFormRegister<FieldValues>,
    errors: FieldErrors,
}

const FilterOption = ({label,register,errors}:FilterOptionProps) => {
    return (
        <Input 
        errors={errors}
        register={register}
        id={label}
        label={label}
        checkbox
        />
    )
}

export default FilterOption