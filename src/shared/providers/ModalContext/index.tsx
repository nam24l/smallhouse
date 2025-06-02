import Svg from 'assets/SVG'
import { motion, AnimatePresence } from 'framer-motion'
import { createContext, ReactNode, useContext, useRef, useState } from 'react'
import useOnClickOutside from 'shared/hooks/useOnClickOutside'

export const ModalContext = createContext<{
  isShowing: boolean
  setIsShowing: (isShowing: boolean) => void
  modalContent: { title: string; subtitle?: string; content: string }
  setModalContent: (title: string, content: string, subtitle?: string) => void
}>({
  isShowing: false,
  setIsShowing: () => {},
  modalContent: { title: '', content: '' },
  setModalContent: () => {}
})

export function useModalContext() {
  return useContext(ModalContext)
}

export function ModalProvider({
  children,
  isShowing
}: {
  children: ReactNode
  isShowing?: boolean
}) {
  const defaultShowing = isShowing || false
  const [isShowingState, setIsShowingState] = useState(defaultShowing)
  const setIsShowing = (showing: boolean) => {
    setIsShowingState(showing)
  }

  const [modalContentState, setModalContentState] = useState({
    title: '',
    subtitle: '',
    content: ''
  })
  const setModalContent = (
    title: string,
    content: string,
    subtitle?: string
  ) => {
    setModalContentState({
      title: title,
      subtitle: subtitle || '',
      content: content
    })
  }

  const containerRef = useRef<HTMLDivElement | null>(null)
  useOnClickOutside(containerRef, () => {
    setIsShowingState(false)
  })

  return (
    <ModalContext.Provider
      value={{
        isShowing: isShowingState,
        setIsShowing: setIsShowing,
        modalContent: modalContentState,
        setModalContent: setModalContent
      }}
    >
      <AnimatePresence>
        {isShowingState && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/75"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="relative w-[900px] rounded-2xl bg-white p-10"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              ref={containerRef}
            >
              <div
                className="absolute right-16 top-4 z-10"
                onClick={() => setIsShowingState(false)}
              >
                <Svg
                  name="Close"
                  style={{ color: 'black' }}
                  className="size-16 hover:cursor-pointer"
                />
              </div>

              <div className="max-h-[500px] overflow-y-auto">
                <div className="flex justify-between">
                  <div>
                    <h1 className="text-2xl">{modalContentState.title}</h1>
                    {modalContentState.subtitle && (
                      <span className="text-sm text-gray-500">
                        {modalContentState.subtitle}
                      </span>
                    )}
                  </div>
                </div>

                <div className="py-12" />
                <p className="text-lg">{modalContentState.content}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </ModalContext.Provider>
  )
}
