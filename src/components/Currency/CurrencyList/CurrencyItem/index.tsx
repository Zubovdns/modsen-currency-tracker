import { currencyImages, currencyNames } from './constants'
import {
  CurrencyItemContainer,
  CurrencyItemContentContainer,
  CurrencyItemIcon,
  CurrencyItemName,
  CurrencyItemValue,
} from './styled'
import { CurrencyItemProps } from './types'

export const CurrencyItem: React.FC<CurrencyItemProps> = ({ code, value }) => {
  return (
    <CurrencyItemContainer>
      <CurrencyItemIcon src={currencyImages[code]} />
      <CurrencyItemContentContainer>
        <CurrencyItemName>{currencyNames[code]}</CurrencyItemName>
        <CurrencyItemValue>{value}</CurrencyItemValue>
      </CurrencyItemContentContainer>
    </CurrencyItemContainer>
  )
}
