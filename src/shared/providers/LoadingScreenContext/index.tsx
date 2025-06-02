import Svg from 'assets/SVG'
import { createContext, ReactNode, useContext, useState } from 'react'

export const LoadingScreenContext = createContext<{
  isLoading: boolean
  setIsLoading: (loading: boolean) => void
}>({
  isLoading: false,
  setIsLoading: () => {}
})

export function useLoadingScreenContext() {
  return useContext(LoadingScreenContext)
}

export function LoadingScreenProvider({
  children,
  isLoading
}: {
  children: ReactNode
  isLoading?: boolean
}) {
  const defaultLoading = isLoading || false
  const [loadingState, setIsLoadingState] = useState(defaultLoading)
  const setLoading = (loading: boolean) => {
    setIsLoadingState(loading)
  }
  return (
    <LoadingScreenContext.Provider
      value={{
        isLoading: loadingState,
        setIsLoading: setLoading
      }}
    >
      {loadingState && (
        <div className="absolute z-50 flex size-full items-center justify-center bg-black/75">
          <Svg name="LoadingSpinner" />
        </div>
      )}
      {children}
    </LoadingScreenContext.Provider>
  )
}
