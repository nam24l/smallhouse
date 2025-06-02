import ActionPopup from '../../components/ActionPopup'
import { createContext, useState, ReactNode, useContext } from 'react'

type ShowData = { header: string; message: string }

interface Context {
  showPopup: (message: ShowData) => void
}

const Context = createContext<Context | null>(null)

export function InformationPopupContextProvider({
  children
}: {
  children: ReactNode
}) {
  const [message, setMessage] = useState<ShowData | null>(null)

  return (
    <Context.Provider value={{ showPopup: setMessage }}>
      {children}
      <ActionPopup
        onClose={() => setMessage(null)}
        header={message?.header ? message.header : ''}
        body={[message?.message ? message.message : '']}
        show={!!message}
        buttonsProps={[
          {
            title: 'Confirm',
            onPress: () => setMessage(null)
          }
        ]}
      />
    </Context.Provider>
  )
}

export function useShowInformationPopup() {
  const context = useContext(Context)
  if (context === null)
    throw new Error(
      'useShowInformationPopup must be called within an InformationPopupContext'
    )
  return context.showPopup
}
