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
  background-color: #333;
  padding: 1vw;
  border-radius: 4px;
  animation: ${({ $isFadeOut }) => ($isFadeOut ? fadeOut : fadeIn)} 0.5s
    forwards;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const NotificationMessage = styled.p`
  color: wheat;
  font-size: 1vw;
`
