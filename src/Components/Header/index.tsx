import { NewTransactionModal } from '../NewTransactionModal'
import { useContextSelector } from 'use-context-selector'
import { ModalContext } from '../../Contexts/ModalContext'
import * as Dialog from '@radix-ui/react-dialog'

import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'

import logoImage from '../../assets/logo.svg'

export function Header() {
  const closeModal = useContextSelector(ModalContext, (context) => {
    return context.closeModal
  })

  const open = useContextSelector(ModalContext, (context) => {
    return context.open
  })

  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImage} alt="" />

        <Dialog.Root open={open} onOpenChange={closeModal}>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
