import Svg from 'assets/SVG'
import React, { ReactNode } from 'react'
import { useNavigate } from 'react-router'
// import { Sidebar } from 'shared/components/Sidebar'

export type MainScreenTemplateType = {
  header?: string
  children: ReactNode
  extraTopPaddingSmall: boolean
  loading: boolean
  containerStyle?: React.ComponentProps<'div'>['className']
  innerContainerStyle?: React.ComponentProps<'div'>['className']
}

export default function MainScreenTemplate({
  children,
  header,
  extraTopPaddingSmall = true,
  loading,
  containerStyle,
  innerContainerStyle
}: MainScreenTemplateType) {
  const navigate = useNavigate()
  return (
    <div
      className={`flex size-full min-h-[50%]  flex-row items-stretch bg-white py-0 lg:h-full  ${containerStyle}`}
    >
      {/* <Sidebar /> */}
      <div
        className={
          //lg:px-16 px-8
          ` overflow-y-auto flex flex-1 flex-col lg:py-6 items-center justify-center  space-y-6 w-11/12 ` +
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
