import { device } from '@constants/breakpoints'
import styled from 'styled-components'
import { SelectedProps } from './types'

export const ModalItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2vw;

  @media ${device.md} {
    gap: 5vw;
  }
`

export const ModalItemConverterContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 3vw;
`

export const ModalItemCurrentCurrencyImage = styled.img`
  width: 5vw;

  @media ${device.md} {
    width: 13vw;
  }
`

export const ModalItemTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

export const ModalItemLabel = styled.h3`
  color: #d9d9d9;
  font-size: 2vw;
  font-weight: 100;

  @media ${device.md} {
    font-size: 5vw;
  }
`

export const ModalItemConvertedValue = styled.p`
  color: #a7b2c3;
  font-size: 1.5vw;

  @media ${device.md} {
    font-size: 4vw;
  }
`

export const ModalItemCurrenciesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1vw;
  width: 100%;
  height: auto;

  @media ${device.md} {
    gap: 4vw;
  }
`

export const ModalItemCurrencyImage = styled.img<SelectedProps>`
  width: 3vw;
  transition: filter 0.2s, background-color 0.2s;
  cursor: pointer;
  border-radius: 5px;

  @media ${device.md} {
    width: 10vw;
  }

  ${({ isSelected }) =>
    isSelected
      ? `
      filter: brightness(1.2);
      border: 1px solid #D9D9D9;
      
    `
      : `
      &:hover {
        filter: brightness(0.7);
        border: 2px solid #A7B2C3;
      }
    `};
`
