import { device } from '@constants/breakpoints'
import styled from 'styled-components'

export const InfoContainer = styled.div`
  text-align: center;
  margin: 2vw auto;
  width: 100%;
  color: ${({ theme }) => theme.contactInfoText};
`

export const InfoTitle = styled.h2`
  font-size: 2vw;

  @media ${device.lg} {
    font-size: 3vw;
  }
  @media ${device.md} {
    font-size: 4vw;
  }
`
export const InfoText = styled.p`
  font-size: 1vw;

  @media ${device.lg} {
    font-size: 1.5vw;
  }
  @media ${device.md} {
    font-size: 3vw;
  }
`
