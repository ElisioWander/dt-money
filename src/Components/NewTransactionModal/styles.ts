import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

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

      &:hover {
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
