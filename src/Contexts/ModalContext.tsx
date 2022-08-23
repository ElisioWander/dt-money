import { ReactNode, useState } from 'react'
import { createContext } from 'use-context-selector'

type ModalContextData = {
  open: boolean
  closeModal: () => void
}

interface ModalProviderProps {
  children: ReactNode
}

export const ModalContext = createContext({} as ModalContextData)

export function ModalProvider({ children }: ModalProviderProps) {
  const [open, setOpen] = useState(false)

  function closeModal() {
    setOpen(!open)
  }

  return (
    <ModalContext.Provider value={{ open, closeModal }}>
      {children}
    </ModalContext.Provider>
  )
}
