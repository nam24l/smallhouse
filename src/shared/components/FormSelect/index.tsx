import Select from 'react-select'
import React from 'react'
import { Control, Controller, FieldValues, Path } from 'react-hook-form'

export type SelectOption = {
  label: string
  value: string
}

export type FormSelectType<T extends FieldValues> = {
  placeholder: string
  control: Control<T>
  options: readonly SelectOption[]
  defaultOptionValue?: readonly SelectOption[]
  className?: string
  name: Path<T>
  required?: boolean
  disabled?: boolean
  isMulti?: boolean
}

export default function FormSelect<T extends FieldValues>({
  placeholder,
  control,
  options,
  className,
  name,
  required,
  defaultOptionValue,
  disabled = false,
  isMulti = false
}: FormSelectType<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Select
          {...field}
          options={options}
          placeholder={placeholder}
          required={required}
          className={className}
          isDisabled={disabled}
          isMulti={isMulti}
          getOptionLabel={(option) => option.label}
          getOptionValue={(option) => option.value}
          isClearable
          onChange={(selectedOption) => {
            field.onChange(isMulti ? selectedOption : selectedOption ?? null)
          }}
          value={
            field.value?.length > 0
              ? field.value
              : defaultOptionValue || (isMulti ? [] : null)
          }
          styles={{
            control: (baseStyles) => ({
              ...baseStyles,
              borderRadius: '0.75rem'
            })
          }}
        />
      )}
    />
  )
}
