import styled from 'styled-components'

export const Button = styled.button`
  padding: 8px;
  display: flex;
  align-items: center;
  border: none;
  /* este se refiere al selector anterior */
  & svg {
    margin-right: 4px
  }
`
