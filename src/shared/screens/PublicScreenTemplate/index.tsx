import Svg from 'assets/SVG'
import React, { ReactNode } from 'react'
import { useNavigate } from 'react-router'

export type PublicScreenTemplateType = {
  header?: string
  children: ReactNode
  extraTopPaddingSmall: boolean
  loading: boolean
  outerContainerStyle?: React.ComponentProps<'div'>['className']
  middleContainerStyle?: React.ComponentProps<'div'>['className']
  innerContainerStyle?: React.ComponentProps<'div'>['className']
}

export default function PublicScreenTemplate({
  children,
  header,
  extraTopPaddingSmall = true,
  loading,
  outerContainerStyle,
  middleContainerStyle,
  innerContainerStyle
}: PublicScreenTemplateType) {
  const navigate = useNavigate()
  return (
    <div className="flex items-center justify-center">
      <div
        className={`flex min-h-[50%] max-w-6xl flex-row items-center py-8 lg:h-auto lg:py-0  ${outerContainerStyle}`}
      >
        <div
          className={
            `flex lg:px-16 px-8 flex-1 flex-col lg:py-6 space-y-6 w-11/12  ` +
            (extraTopPaddingSmall ? `pt-8 md:pt-0 ` : '') +
            middleContainerStyle
          }
        >
          <div
            className={`flex flex-col justify-center gap-6 ${innerContainerStyle}`}
          >
            {/* placeholder for now */}
            {header == `back-button` && !loading && (
              <button onClick={() => navigate(-1)}>
                <Svg name="Back" />
              </button>
            )}
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
