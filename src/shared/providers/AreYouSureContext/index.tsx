import { useState, createContext, useContext, useRef, useEffect } from 'react'
import { To, useNavigate } from 'react-router'
import { ActionPopup } from 'shared/components'

interface AreYouSureMessageVariables {
  header: string
  body: string
  buttonText: string
  callback: () => void
}

type PrenavigateMessage = Omit<AreYouSureMessageVariables, 'callback'>

interface AreYouSureContextValue {
  message: AreYouSureMessageVariables | null
  setMessage: (message: AreYouSureMessageVariables | null) => void
  navigate: (path: string | number) => void
  setPreNavigateMessage: (message: PrenavigateMessage | null) => void
}

const Context = createContext<null | AreYouSureContextValue>(null)

export default function AreYouSureContextProvider({
  children,
  navigate
}: {
  children: React.ReactNode
  navigate: ReturnType<typeof useNavigate>
}) {
  const prenavigateMessageRef = useRef<null | PrenavigateMessage>(null)
  const [value, setValue] = useState<null | AreYouSureMessageVariables>(null)

  function navigateWithAreYouSureMessage(path: string | number) {
    if (prenavigateMessageRef.current === null) {
      navigate(path as To)
      return
    }
    setValue({
      ...prenavigateMessageRef.current,
      callback: () => {
        navigate(path as To)
      }
    })
  }

  return (
    <Context.Provider
      value={{
        message: value,
        setMessage: setValue,
        navigate: navigateWithAreYouSureMessage,
        setPreNavigateMessage: (message: PrenavigateMessage | null) => {
          prenavigateMessageRef.current = message
        }
      }}
    >
      {children}

      <ActionPopup
        show={value !== null}
        onClose={() => setValue(null)}
        body={[value?.body ? value.body : '']}
        header={value?.header ? value.header : ''}
        buttonsProps={[
          {
            title: 'Confirm',
            onPress: () => {
              value?.callback()
              setValue(null)
            }
          }
        ]}
      />
    </Context.Provider>
  )
}

export function useAreYouSureContext() {
  const value = useContext(Context)
  if (!value) {
    throw new Error(
      'useAreYouSureContext must be used within a AreYouSureContextProvider'
    )
  }
  return value
}

export function useAreYouSureNavigationMessage(
  message: PrenavigateMessage,
  options?: {
    disabled: boolean
  }
) {
  const context = useAreYouSureContext()
  const disable = !!options?.disabled
  useEffect(() => {
    if (disable) return
    context.setPreNavigateMessage(message)
    window.onbeforeunload = () => message.body
    return () => {
      context.setPreNavigateMessage(null)
      window.onbeforeunload = null
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [disable])
}
