import {
  FC,
  MouseEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import closeModalIcon from '@assets/icons/closeModalIcon.svg'

import { MODAL_CONTAINER_ID } from './constants'
import { createContainer,Portal } from './Portal'
import {
  ModalCloseButton,
  ModalCloseButtonIcon,
  ModalContent,
  ModalWrap,
} from './styled'
import { ModalProps } from './types'

const Modal: FC<ModalProps> = ({ onClose, children }) => {
  const [isMounted, setMounted] = useState(false)

  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    createContainer({ id: MODAL_CONTAINER_ID })
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleWrapperClick = (event: MouseEvent) => {
      const { target } = event

      if (target instanceof Node && rootRef.current === target) {
        onClose?.()
      }
    }
    const handleEscapePress = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose?.()
      }
    }

    window.addEventListener('click', handleWrapperClick)
    window.addEventListener('keydown', handleEscapePress)

    return () => {
      window.removeEventListener('click', handleWrapperClick)
      window.removeEventListener('keydown', handleEscapePress)
    }
  }, [onClose])

  const handleClose: MouseEventHandler<HTMLButtonElement> = useCallback(
    (e) => {
      e.stopPropagation()
      onClose?.()
    },
    [onClose]
  )

  return isMounted ? (
    <Portal id={MODAL_CONTAINER_ID}>
      <ModalWrap ref={rootRef}>
        <ModalContent>
          <ModalCloseButton onClick={handleClose}>
            <ModalCloseButtonIcon src={closeModalIcon} />
          </ModalCloseButton>
          {children}
        </ModalContent>
      </ModalWrap>
    </Portal>
  ) : null
}

export default Modal
