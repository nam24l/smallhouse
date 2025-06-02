import { InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from 'react'
import { FieldError, UseFormRegisterReturn } from 'react-hook-form'

export type TextFieldFormType = InputHTMLAttributes<HTMLInputElement> &
  TextareaHTMLAttributes<HTMLTextAreaElement> & {
    isPasswordValidate?: boolean
    password?: string
    isError: FieldError | undefined
    isTextField?: boolean
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    register?: UseFormRegisterReturn
    outerDivStyle?: string // className as string
    defaultValue: string | number
    className?: string
    helperText?: string
    inputElement?: ReactNode
    inputDivStyle?: string
    helperTextStyle?: string // className as string
    onKeyEnter?: (
      event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void
    errorTextStyle?: string
    inputStyle?: string
    disabled?: boolean
    inputProps?: React.KeyboardEventHandler<HTMLInputElement>
    maxLength?: number
    minLength?: number
    type?: string
    title?: string
  }

export default function TextFieldForm({
  placeholder,
  defaultValue,
  register,
  outerDivStyle,
  type = 'text',
  isTextField = false,
  helperText,
  onKeyEnter,
  helperTextStyle = '',
  disabled = false,
  maxLength = 100,
  minLength = 0,
  inputProps,
  title,
  errorTextStyle,
  inputDivStyle,
  inputStyle,
  inputElement,
  isError
}: TextFieldFormType) {
  const C = isTextField ? 'textarea' : 'input'
  return (
    <div
      className={
        'flex  ' + (outerDivStyle ? ` ${outerDivStyle}` : ' w-auto flex-col')
      }
    >
      {helperText && (
        <span className={helperTextStyle + ' py-2'}>{helperText}</span>
      )}
      <div
        className={
          'flex  ' +
          (inputDivStyle ? ` ${inputDivStyle}` : ' items-center justify-center')
        }
      >
        <C
          {...register}
          type={type}
          disabled={disabled}
          onKeyDown={onKeyEnter}
          defaultValue={defaultValue}
          placeholder={placeholder}
          autoCapitalize="none"
          {...inputProps}
          title={title}
          className={'w-full ' + inputStyle}
          maxLength={maxLength}
          minLength={minLength}
        />
        {inputElement}
      </div>

      {isError && (
        <span className={errorTextStyle + ' py-2'}>{isError.message}</span>
      )}
    </div>
  )
}
