import { device } from '@constants/breakpoints'
import styled from 'styled-components'

export const CurrencyItemContainer = styled.div`
  width: 100%;
  height: 8vw;
  background-color: ${({ theme }) => theme.currencyItemBackground};
  padding: 1vw;
  border: 1px solid ${({ theme }) => theme.currencyItemBorderColor};
  border-radius: 0.5vw;

  display: flex;
  justify-content: flex-start;

  gap: 2vw;

  cursor: pointer;

  @media ${device.md} {
    height: 12vw;
  }
`

export const CurrencyItemIcon = styled.img`
  height: 100%;
`

export const CurrencyItemContentContainer = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
`

export const CurrencyItemName = styled.h4`
  color: ${({ theme }) => theme.currencyItemNameColor};
  font-weight: 100;
  font-size: 2.2vw;

  @media ${device.md} {
    font-size: 3.8vw;
  }
`

export const CurrencyItemValue = styled.p`
  color: ${({ theme }) => theme.currencyItemValueColor};
  font-weight: 100;
  font-size: 1.8vw;

  @media ${device.md} {
    font-size: 3vw;
  }
`
