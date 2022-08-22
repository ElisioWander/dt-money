import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const Overlay = styled(Dialog.Overlay)`
  width: 100vw;
  height: 100vh;

  position: fixed;
  inset: 0; // the same as top: 0; left: 0; bottom: 0; right: 0;

  background: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
  min-width: 32rem;

  padding: 2.5rem 3rem;
  border-radius: 6px;

  position: fixed;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  background-color: ${(props) => props.theme['gray-800']};

  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    margin-top: 2rem;

    input {
      padding: 1rem;

      border: 0;
      border-radius: 6px;

      color: ${(props) => props.theme['gray-300']};
      background-color: ${(props) => props.theme['gray-900']};

      &::placeholder {
        color: ${(props) => props.theme['gray-500']};
      }
    }

    button[type='submit'] {
      height: 58px;

      margin-top: 1.5rem;
      padding: 0 1.25rem;

      border: 0;
      border-radius: 6px;
      cursor: pointer;
      font-weight: bold;

      color: ${(props) => props.theme.white};
      background-color: ${(props) => props.theme['green-300']};

      transition: background-color 0.2s;

      &:disabled {
        background-color: ${(props) => props.theme['green-700']};
        cursor: not-allowed;
      }

      &:not(:disabled):hover {
        background-color: ${(props) => props.theme['green-700']};
      }
    }
  }
`

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;

  border: 0;
  line-height: 0;

  color: ${(props) => props.theme['gray-500']};
  background: transparent;
`

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  margin-top: 0.5rem;
`

interface TransactionTypeButtonProps {
  variant: 'income' | 'outcome'
}

export const TransactionTypeButton = styled(
  RadioGroup.Item,
)<TransactionTypeButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  padding: 1rem;
  border: 0;
  border-radius: 6px;
  cursor: pointer;

  color: ${(props) => props.theme['gray-300']};
  background-color: ${(props) => props.theme['gray-700']};

  transition: background-color 0.1s;

  svg {
    color: ${(props) =>
      props.variant === 'income'
        ? props.theme['green-300']
        : props.theme['red-300']};
  }

  &[data-state='unchecked']:hover {
    background-color: ${(props) => props.theme['gray-600']};
  }

  &[data-state='checked'] {
    color: ${(props) => props.theme.white};
    background-color: ${(props) =>
      props.variant === 'income'
        ? props.theme['green-500']
        : props.theme['red-500']};

    svg {
      color: ${(props) => props.theme.white};
    }
  }
`
