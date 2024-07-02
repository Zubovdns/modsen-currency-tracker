import styled from 'styled-components'

export const PFContainer = styled.div`
  width: 100%;
  height: auto;

  padding: 20vh 0;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const PFMessage = styled.h1`
  color: ${({ theme }) => theme.pageFallbackColor};
  font-size: 3vw;
`
