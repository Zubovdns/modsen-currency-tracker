import { device } from '@constants/breakpoints'
import styled from 'styled-components'

export const StatusContainer = styled.div`
  width: 100%;
  height: auto;

  padding-top: 2vw;
  padding-bottom: 2vw;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1vw;
`

export const LastUpdateText = styled.p`
  color: ${({ theme }) => theme.statusColor};
  font-size: 1.5vw;

  @media ${device.md} {
    font-size: 3vw;
  }
`
export const LastUpdateSvg = styled.img`
  width: 2.5vw;
`
