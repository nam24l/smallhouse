import { ReactNode } from 'react'
import { Link, To } from 'react-router'
import { ActivitySpinner } from '..'

type ButtonVariant =
  | 'default-button'
  | 'default-disabled'
  | 'action'
  | 'dangerous'
  | 'card'
  | 'gradient-border'
  | 'purple-outline'
  | 'purple-outline-white-text'
  | 'disabled'
  | 'disabled-outline'
  | 'full'
  | 'full-disabled'
  | 'disabled-action'
  | 'chat'
  | 'sidebar'
  | 'grid'
  | 'grid-destroy'
  | 'grid-approve'

type ButtonSize = 'small' | 'normal' | 'tall' | 'none'

function classNameForVariant(variant: ButtonVariant) {
  switch (variant) {
    case 'default-button':
      return 'text-[#ff0085] bg-white font-medium hover:bg-pink-600 hover:text-white'
    case 'grid':
      return 'hover:text-[#ff0085]'
    case 'grid-destroy':
      return 'bg-red-700 text-white rounded-2xl  hover:bg-red-900 '
    case 'grid-approve':
      return 'bg-green-700 text-white rounded-2xl  hover:bg-green-900 '
    case 'default-disabled':
      return 'text-[#ff0085] bg-slate-500 font-medium'
    case 'sidebar':
      return 'text-white bg-black font-medium w-32'
    case 'card':
      return 'text-white bg-[#ff0085] font-medium w-36 hover:bg-white hover:text-[#ff0085]'
    case 'action':
      return 'text-white bg-black font-medium w-44'
    case 'dangerous':
      return 'bg-red-500 text-white hover:bg-white hover:text-red-500  font-medium'
    case 'purple-outline-white-text':
    case 'purple-outline':
      return 'border-2 border-dangerous'
    case 'disabled':
      return 'bg-gray-400 text-white'
    case 'disabled-outline':
      return 'border-2 border-gray-400 text-gray-500'
    case 'disabled-action':
      return 'bg-gray-400 text-white w-44'
    case 'full':
      return 'text-white bg-black font-medium w-full'
    case 'full-disabled':
      return 'font-medium w-full bg-gray-400 text-white'
    case 'chat':
      return 'ml-3 bg-black text-white rounded-md p-2'
  }
  return ''
}

function classNameForSize(size: ButtonSize) {
  switch (size) {
    case 'tall':
      return ' px-5 h-16'
    case 'small':
      return ' py-2.5 px-6'
    case 'normal':
      return ' px-12 py-3.5'
    case 'none':
      return ''
  }
}

export type SButtonType = {
  title: string
  onPress?: () => void
  to?: To
  isLoading?: boolean
  disabled?: boolean
  variant?: ButtonVariant
  leftIconElement?: ReactNode
  centerIconElement?: ReactNode
  rightIconElement?: ReactNode
  className?: string
  size?: ButtonSize
  formSubmit?: boolean
  form?: string
  style?: object
}

export default function SButton({
  title,
  onPress,
  to,
  isLoading,
  disabled,
  variant = 'default-button',
  size = 'normal',
  rightIconElement,
  leftIconElement,
  centerIconElement,
  className,
  formSubmit,
  // form = 'form',
  style
}: SButtonType) {
  const _disabled = isLoading || disabled
  if (!!to && !!onPress) {
    throw new Error('Cannot have both a "to" and "onPress" prop in AdminButton')
  }
  if (!to && !onPress && !formSubmit) {
    throw new Error("Must have either a 'to' or 'onPress' prop in AdminButton")
  }
  const C = to ? Link : 'button'
  return (
    <C
      to={to!}
      onClick={onPress}
      type={formSubmit ? 'submit' : 'button'}
      // form={form}
      formNoValidate
      className={
        classNameForVariant(variant) +
        ' font-medium rounded-[12px] text-sm inline-flex justify-center items-center appearance-none ' +
        (_disabled ? ' cursor-not-allowed' : '') +
        (className ? ` ${className}` : '') +
        classNameForSize(size)
      }
      style={{
        ...(variant === 'gradient-border'
          ? {
              border: '1px solid transparent',
              borderRadius: '91px',
              background:
                'linear-gradient(to right, #1B202D, #1B202D), linear-gradient(to right, #A0355A, #814D93)',
              backgroundClip: 'padding-box, border-box',
              backgroundOrigin: 'padding-box, border-box'
            }
          : undefined),
        // ...(size == 'tall' ? { height: '3.5rem' } : undefined),
        ...style
      }}
      disabled={_disabled}
    >
      <div className="relative flex flex-row items-center justify-center whitespace-nowrap">
        <span
          className={
            'inline-flex flex-row items-center' +
            (isLoading ? ' opacity-0' : '') +
            (variant === 'gradient-border' ? ' text-white' : '') +
            (variant === 'purple-outline' ? ' text-purplish' : '') +
            (variant === 'purple-outline-white-text' ? ' text-white' : '') +
            (variant === 'grid-destroy' || variant === 'grid-approve'
              ? ' text-lg uppercase font-bold'
              : '')
          }
        >
          {centerIconElement ? (
            <>
              <span>{centerIconElement}</span>
            </>
          ) : (
            <>
              {leftIconElement && (
                <span className="mr-2">{leftIconElement}</span>
              )}
              {title}
              {rightIconElement && (
                <span className="ml-2">{rightIconElement}</span>
              )}
            </>
          )}
        </span>
        <div className="absolute inset-0 flex items-center justify-center">
          {isLoading && <ActivitySpinner />}
        </div>
      </div>
    </C>
  )
}
