import { device } from '@constants/breakpoints'
import styled from 'styled-components'

export const CurrencyListContainer = styled.div`
  width: 100%;
  height: auto;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 5vw;
  grid-row-gap: 3vw;

  @media ${device.md} {
    grid-template-columns: 1fr;
  }
`

export const CurrencyListTitleBox = styled.div`
  width: 47%;
  height: 4vw;
  grid-column: 1 / -1;
  border-bottom: 1px solid ${({ theme }) => theme.currencyItemTitleBorderColor};
  margin-top: 4vw;

  @media ${device.md} {
    width: 100%;
    height: 8vw;
  }
`

export const CurrencyListTitle = styled.h3`
  color: ${({ theme }) => theme.currencyItemTitleColor};
  font-size: 2vw;

  @media ${device.md} {
    font-size: 3vw;
  }
`
