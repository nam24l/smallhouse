import {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode
} from 'react'

const Context = createContext<number | null>(null)

export function WindowHeightContextProvider({
  children
}: {
  children: ReactNode
}) {
  const [windowHeight, setWindowHeight] = useState<number>(1024)
  useEffect(() => {
    function set() {
      const doc = document.documentElement
      doc.style.setProperty('--app-height', `${window.innerHeight}px`)
      setWindowHeight(window.innerHeight)
    }
    set()
    window.addEventListener('resize', set)
    return () => {
      window.removeEventListener('resize', set)
    }
  }, [])
  return <Context.Provider value={windowHeight}>{children}</Context.Provider>
}

export function useWindowHeight() {
  const r = useContext(Context)
  if (r === null)
    throw new Error(
      'useWindowHeight must be used within a WindowHeightContextProvider'
    )
  return r
}
