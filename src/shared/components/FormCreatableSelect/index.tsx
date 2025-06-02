import React, { useState, KeyboardEventHandler } from 'react'
import { Control, Controller, FieldValues, Path } from 'react-hook-form'
import CreatableSelect from 'react-select/creatable'

export type FormCreatableSelectType<T extends FieldValues> = {
  placeholder: string
  control: Control<T>
  className?: string
  name: Path<T>
  required?: boolean
  defaultValueOptions?: Option[]
  disabled?: boolean
}

const components = {
  DropdownIndicator: null
}

interface Option {
  label: string
  value: string
}

const createOption = (label: string): Option => ({
  label,
  value: label
})

export default function FormCreatableSelect<T extends FieldValues>({
  placeholder,
  control,
  className,
  defaultValueOptions = [],
  name,
  disabled = false,
  required
}: FormCreatableSelectType<T>) {
  const [inputValue, setInputValue] = useState('')

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        const handleKeyDown: KeyboardEventHandler = (event) => {
          if (!inputValue) return
          if (event.key === 'Enter' || event.key === 'Tab') {
            event.preventDefault()
            const newOption = createOption(inputValue)
            field.onChange([...(field.value || []), newOption])
            setInputValue('')
          }
        }

        const selectedValues =
          field.value && Array.isArray(field.value)
            ? field.value
            : defaultValueOptions

        return (
          <CreatableSelect
            {...field}
            components={components}
            inputValue={inputValue}
            isClearable
            required={required}
            isMulti
            styles={{
              control: (baseStyles) => ({
                ...baseStyles,
                borderRadius: '0.75rem'
              })
            }}
            isDisabled={disabled}
            className={className}
            menuIsOpen={false}
            options={defaultValueOptions}
            onChange={(newValue) => field.onChange(newValue || [])}
            onInputChange={(newValue) => setInputValue(newValue)}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            value={selectedValues}
          />
        )
      }}
    />
  )
}
