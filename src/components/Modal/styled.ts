import { device } from '@constants/breakpoints'
import styled from 'styled-components'

export const ModalWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.modalWrapBackground};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
`

export const ModalContent = styled.div`
  background: ${({ theme }) => theme.modalBackground};
  width: 35vw;
  height: auto;
  overflow-y: auto; /* Применяет прокрутку только по оси Y */
  overflow-x: hidden; /* Отключает прокрутку по оси X */
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  padding: 1.5vw;
  box-shadow: 0 4px 6px ${({ theme }) => theme.modalBoxShadow};
  position: relative;
  border: 1px solid ${({ theme }) => theme.modalBorderColor};

  @media ${device.lg} {
    width: 70vw;
    padding: 3vw;
  }

  @media ${device.md} {
    width: 80vw;
    padding: 4vw;
  }
`

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 0px;
  right: -10%;

  width: auto;
  height: auto;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  outline: none;
  border: 0;
  background: transparent;
`

export const ModalCloseButtonIcon = styled.img`
  width: 2vw;

  @media ${device.md} {
    width: 6vw;
  }
`
