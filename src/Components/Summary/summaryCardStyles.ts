import styled, { css } from 'styled-components'

interface CardProps {
  variant?: 'green'
}

export const Card = styled.div<CardProps>`
  padding: 2rem;
  border-radius: 6px;

  background-color: ${(props) => props.theme['gray-600']};

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    color: ${(props) => props.theme['gray-300']};
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
  }

  ${(props) =>
    props.variant === 'green' &&
    css`
      background-color: ${props.theme['green-700']};
    `}
`
