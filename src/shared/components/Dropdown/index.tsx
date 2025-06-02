import { ReactNode, useRef, useState } from 'react'
import Svg from 'assets/SVG'
import useOnClickOutside from '../../hooks/useOnClickOutside'

export type DropdownVariant =
  | 'default-button'
  | 'outline'
  | 'hamburger'
  | 'dark'

const outlineClassName =
  'border border-activeGrey bg-whitish rounded-lg text-darkText'

export type DropdownOption = {
  label: string
  divLabel?: ReactNode
  value: string
}

export type DropdownType = {
  leadingText?: string
  value: string | null
  /**
   * Only displays the placeholder text if value is null
   */
  placeholderText?: string
  onChange: (value: string) => void
  options: DropdownOption[]
  className?: string
  variant?: DropdownVariant
  /**
   * Amount of extra space added to the right side of the drop down menu,
   * in case the dropdown menu needs to be wider than the select itself
   */
  extraSpace?: string
  isHamburger?: boolean
  disabled?: boolean
}

function dropdownClassNameForVariant(variant: DropdownVariant) {
  switch (variant) {
    case 'hamburger':
      return 'bg-lightBackground w-[200px] left-auto'
    case 'default-button':
      return 'bg-lightBackground'
    case 'dark':
      return 'bg-black border border-activeGrey rounded-lg text-white'
    case 'outline':
      return outlineClassName
  }
}

function inputClassNameForVariant(variant: DropdownVariant) {
  switch (variant) {
    case 'hamburger':
      return ''
    case 'default-button':
      return ''
    case 'dark':
      return 'border border-activeGrey bg-whitish rounded-lg text-black justify-between'
    case 'outline':
      return outlineClassName + ' justify-between'
  }
}

function buttonClassNameForVariant(variant: DropdownVariant) {
  if (variant === 'outline' || variant === 'dark') return 'justify-between p-3'
  return ''
}

export function useDropdownState({
  noneSelectedText,
  options,
  otherProps
}: {
  noneSelectedText: string
  options: DropdownOption[]
  otherProps?: Omit<DropdownType, 'onChange' | 'value' | 'options'>
}) {
  const [value, setValue] = useState<null | string>(null)
  return {
    props: {
      value: value === null ? 'all' : value,
      onChange: (v: string) => {
        if (v === 'all') setValue(null)
        else setValue(v)
      },
      options: [
        {
          value: 'all',
          label: noneSelectedText
        }
      ].concat(options),
      ...otherProps
    },
    value,
    setValue
  }
}

export default function Dropdown({
  leadingText,
  value,
  onChange,
  placeholderText,
  options,
  className,
  extraSpace,
  variant = 'default-button',
  isHamburger,
  disabled = false
}: DropdownType) {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false)
  function onOptionPress(value: string) {
    setDropdownOpen(false)
    onChange(value)
  }
  const containerRef = useRef<HTMLDivElement | null>(null)
  useOnClickOutside(containerRef, () => {
    setDropdownOpen(false)
  })
  const isHorizontal =
    window.screen.orientation.type == 'landscape-primary' ? ' h-[250px]' : ''
  return (
    <div
      ref={containerRef}
      className={
        'text-inactiveGrey cursor-pointer relative inline-flex flex-row items-center' +
        (className ? ` ${className}` : '') +
        ` ${inputClassNameForVariant(variant)}`
      }
    >
      <button
        disabled={disabled}
        onClick={() => {
          setDropdownOpen((old) => !old)
        }}
        className={
          'flex flex-row items-center w-full' +
          ` ${buttonClassNameForVariant(variant)}`
        }
      >
        {value !== null
          ? (leadingText ? leadingText : '') +
            options.find((e) => e.value === value)?.label
          : placeholderText}
        <Svg
          className="ml-1.5 size-5"
          name={isHamburger ? 'HamburgerMenu' : 'ChevronDown'}
        />
      </button>

      {dropdownOpen && (
        <div
          className={
            'absolute left-0 right-0 rounded-md flex flex-col z-50 max-h-96 overflow-scroll scrollbar-hide' +
            ` ${dropdownClassNameForVariant(variant)} ` +
            isHorizontal
          }
          style={{
            top: 'calc(100% + 1rem)',
            marginRight: extraSpace ? '-' + extraSpace : undefined
          }}
        >
          {options.map((e) => (
            <button
              key={e.value}
              className={
                'flex flex-row justify-between items-start p-4 text-left' +
                (variant === 'outline' ? ' text-darkText' : '') +
                (value !== e.value
                  ? ' text-inactiveGrey'
                  : ' text-white bg-black')
              }
              onClick={() => onOptionPress(e.value)}
            >
              {e.divLabel ? e.divLabel : e.label}
              <Svg
                className={'w-5 h-5' + (value === e.value ? ' ' : ' opacity-0')}
                name="Check"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
