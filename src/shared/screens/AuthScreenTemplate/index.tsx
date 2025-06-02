import Svg from 'assets/SVG'
import React, { ReactNode } from 'react'
import { useNavigate } from 'react-router'

export type AuthScreenTemplateType = {
  header?: string
  children: ReactNode
  extraTopPaddingSmall: boolean
  loading: boolean
  containerStyle?: React.ComponentProps<'div'>['className']
  innerContainerStyle?: React.ComponentProps<'div'>['className']
}

export default function AuthScreenTemplate({
  children,
  header,
  extraTopPaddingSmall = true,
  loading,
  containerStyle,
  innerContainerStyle
}: AuthScreenTemplateType) {
  const navigate = useNavigate()
  return (
    <div
      className={`flex size-full min-h-[50%] max-w-6xl flex-row items-stretch py-8 lg:py-0  ${containerStyle}`}
    >
      <div
        className={
          `flex lg:px-16 px-8 flex-1 flex-col lg:py-6 items-stretch justify-start  space-y-6 w-11/12 ` +
          (extraTopPaddingSmall ? `pt-8 md:pt-0 ` : '') +
          innerContainerStyle
        }
      >
        {/* placeholder for now */}
        {header == `back-button` && !loading && (
          <button onClick={() => navigate(-1)}>
            <Svg name="Back" />
          </button>
        )}
        {/* <C
      onSubmit={formOnSubmit}
      className=“flex flex-col space-y-6 pb-8 lg:pb-0"
      id=“form”
    > */}
        {children}
        {/* </C> */}
      </div>
    </div>
  )
}
