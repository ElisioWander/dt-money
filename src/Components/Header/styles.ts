import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 2.5rem 0 7.5rem;
  background-color: ${(props) => props.theme['gray-900']};
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 auto;
  padding: 0 1.5rem;
`

export const NewTransactionButton = styled.button`
  height: 50px;

  padding: 0 1.25rem;

  border: 0;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;

  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme['green-500']};

  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) => props.theme['green-700']};
  }
`
