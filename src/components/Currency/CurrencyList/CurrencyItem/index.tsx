import { useState } from 'react'
import Modal from '@components/Modal'
import { CurrencyData } from '@src/interfaces/currencies'

import { currencyImages, currencyNames } from '../constants'
import { CurrencyModalItem } from '../CurrencyModalItem'

import {
  CurrencyItemContainer,
  CurrencyItemContentContainer,
  CurrencyItemIcon,
  CurrencyItemName,
  CurrencyItemValue,
} from './styled'

export const CurrencyItem = ({ code, value }: CurrencyData) => {
  const [isModalActive, setModalActive] = useState(false)

  const handleModalOpen = () => {
    setModalActive(true)
  }
  const handleModalClose = () => {
    setModalActive(false)
  }

  return (
    <CurrencyItemContainer
      onClick={handleModalOpen}
      data-testid="currency-item"
    >
      <CurrencyItemIcon src={currencyImages[code]} />
      <CurrencyItemContentContainer>
        <CurrencyItemName>{currencyNames[code]}</CurrencyItemName>
        <CurrencyItemValue>{value}</CurrencyItemValue>
      </CurrencyItemContentContainer>
      {isModalActive && (
        <Modal onClose={handleModalClose}>
          <CurrencyModalItem code={code} />
        </Modal>
      )}
    </CurrencyItemContainer>
  )
}
