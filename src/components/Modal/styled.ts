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
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
`

export const ModalContent = styled.div`
  background: #202025;
  width: 500px;
  height: 300px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  border: 1px solid #474747;
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
  width: 30px;
`
