"use client"

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form"
import { useState } from "react"
import { AiOutlineDown } from "react-icons/ai"
import Select from "react-select"
import { FilterOptionInterface } from "../page"
import makeAnimated from "react-select/animated"


interface FilterOptionProps {
    label: string,
    value?: FilterOptionInterface[],
    placeholder?: string,
    disabled?: boolean,
    onChange?: (value: any) => void,
    options?: FilterOptionInterface[],
    children?: React.ReactNode
}

const animatedComponents = makeAnimated();

const FilterOption = ({label,value,onChange,disabled,options,children,placeholder}:FilterOptionProps) => {
    const [isOpen,setIsOpen] = useState(false)
    return (
        <div className="flex flex-col gap-2 pb-2">
            <div className="flex items-center justify-between border-t-2 border-t-white pt-2">
                {label}
                <AiOutlineDown size={18} className="cursor-pointer" 
                onClick={() => setIsOpen(!isOpen)}
                />
            </div>
            {isOpen && children && (
                <div className="flex items-center gap-2">
                    {children}
                </div>
            )}
            {isOpen && !children && (
                <Select 
                placeholder={placeholder}
                value={value}
                components={animatedComponents}
                isMulti
                isClearable
                isDisabled={disabled}
                isLoading={disabled}
                options={options}
                onChange={(option) => onChange?.(option)}
                formatOptionLabel={(option) => (
                    <div className="text-neutral-700">
                        {option.label}
                    </div>
                )}
                classNames={{
                    control: () => 'p-3 border-2',
                    clearIndicator: () => 'text-lg cursor-pointer',
                    dropdownIndicator: () => 'text-lg cursor-pointer',
                    multiValueLabel: () => 'text-lg font-semibold rounded-full',
                    multiValueRemove: () => 'text-lg cursor-pointer background-red',
                }}
                theme={(theme) => ({
                    ...theme,
                    borderRadius: 6,
                    colors: {
                        ...theme.colors,
                        primary: 'gray',
                        primary25: '#E44949',
                    }
                })}
                />
            )}
        </div>
    )
}

export default FilterOption