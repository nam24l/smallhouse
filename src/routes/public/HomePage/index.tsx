import React from 'react'
import { SButton } from 'shared/components'
import { useWindowHeight } from 'shared/providers/WindowHeightContext'
import images from 'assets/images'
import { Links } from 'shared/components'

export default function HomePage() {
  const windowHeight = useWindowHeight()

  return (
    <div
      className="relative flex h-screen flex-col"
      style={{ maxHeight: windowHeight }}
    >
      {/* Background Image */}
      <img
        src={images.car}
        alt="The Wonder Mobile"
        className="absolute inset-0 size-full object-cover"
      />

      {/* Logo pinned near the top */}
      <div className="relative z-10 flex justify-center pt-6 sm:pt-4">
        <img
          src={images.logo}
          alt="Small house logo"
          className="w-28 sm:w-36 md:w-44 xl:w-60 lg:w-52"
        />
      </div>

      {/* Content area with h2 and Links */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center space-y-8 px-4">
        <div className="-mt-8 sm:-mt-8 md:-mt-10">
          <Links />
        </div>
      </div>
    </div>
  )
}
