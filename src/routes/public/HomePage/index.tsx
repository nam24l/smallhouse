import React from 'react'
import { SButton } from 'shared/components'
import { useWindowHeight } from 'shared/providers/WindowHeightContext'

export default function HomePage() {
  const windowHeight = useWindowHeight()

  return (
    <div
      className="flex h-screen items-center justify-center"
      style={{
        maxHeight: windowHeight
      }}
    >
      <div
        className={`flex size-full min-h-[50%] max-w-6xl flex-row items-center py-8 lg:h-auto lg:py-0`}
      >
        <div
          className={`flex w-11/12 flex-1 flex-col items-stretch justify-start space-y-6 px-8  lg:px-16 lg:py-6 `}
        >
          <div className="flex flex-col justify-center">
            <div className="py-3" />
            <div className="flex flex-col items-center justify-center gap-6">
              <SButton size="normal" title={'Privacy Policy'} to={'/privacy'} />
              <SButton size="normal" title={'Terms of Service'} to={'/terms'} />
              {/* <SButton
                size="normal"
                title={'Forgot Password'}
                to={'/forgot-password'}
              /> */}
            </div>
            <div className=" py-8" />
          </div>
        </div>
      </div>
    </div>
  )
}
