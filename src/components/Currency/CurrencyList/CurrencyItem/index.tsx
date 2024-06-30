import Modal from '@components/Modal'
import { CurrencyData } from '@src/interfaces/currencies'
import { useState } from 'react'
import { CurrencyModalItem } from '../CurrencyModalItem'
import { currencyImages, currencyNames } from '../constants'
import {
  CurrencyItemContainer,
  CurrencyItemContentContainer,
  CurrencyItemIcon,
  CurrencyItemName,
  CurrencyItemValue,
} from './styled'

export const CurrencyItem: React.FC<CurrencyData> = ({ code, value }) => {
  const [isModalActive, setModalActive] = useState(false)

  const handleModalOpen = () => {
    setModalActive(true)
  }
  const handleModalClose = () => {
    setModalActive(false)
  }

  return (
    <CurrencyItemContainer onClick={handleModalOpen}>
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
