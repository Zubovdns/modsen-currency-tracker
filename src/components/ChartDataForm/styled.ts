import { device } from '@constants/breakpoints'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  display: flex;
  padding: 0 20vw;

  @media ${device.md} {
    padding: 2vw 10vw;
  }
`

export const Button = styled.button`
  background-color: ${({ theme }) => theme.chartDataFormButtonBackground};
  color: ${({ theme }) => theme.chartDataFormButtonTextColor};
  font-size: 1vw;
  padding: 0.5vw;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) =>
      theme.chartDataFormButtonBackgroundHover};
  }

  @media ${device.md} {
    font-size: 3vw;
    padding: 1vw;
  }
`
