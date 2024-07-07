import { device } from '@constants/breakpoints'
import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(-100%);
  }
`

export const NotificationContainer = styled.div<{ $isFadeOut: boolean }>`
  position: fixed;
  top: 90%;
  left: 1%;
  transform: translateY(-50%);
  background-color: ${({ theme }) => theme.notificationBackground};
  padding: 1vw;
  border-radius: 4px;
  animation: ${({ $isFadeOut }) => ($isFadeOut ? fadeOut : fadeIn)} 0.5s
    forwards;

  display: flex;
  align-items: center;
  justify-content: center;

  @media ${device.lg} {
    padding: 1.5vw;
  }

  @media ${device.md} {
    padding: 3vw;
  }
`

export const NotificationMessage = styled.p`
  color: ${({ theme }) => theme.notificationText};
  font-size: 1vw;

  @media ${device.lg} {
    font-size: 1.5vw;
  }

  @media ${device.md} {
    font-size: 3vw;
  }
`
