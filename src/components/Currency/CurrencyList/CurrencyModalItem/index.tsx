import { CACHE_TIMEOUT } from '@constants/currencyApi'
import { useAppDispatch, useAppSelector } from '@store/hooks/hooks'
import { currencies } from '@store/selectors/currenciesSelectors'
import { fetchCurrencies } from '@store/thunks/fetchCurrencies'
import { FC, useEffect, useState } from 'react'
import { currencyImages, mainCurrency } from '../constants'
import {
  ModalItemContainer,
  ModalItemConvertedValue,
  ModalItemConverterContainer,
  ModalItemCurrenciesContainer,
  ModalItemCurrencyImage,
  ModalItemCurrentCurrencyImage,
  ModalItemLabel,
  ModalItemTextContainer,
} from './styled'
import { ModalItemProps } from './types'

export const CurrencyModalItem: FC<ModalItemProps> = ({ code }) => {
  const [selectedCurrency, setSelectedCurrency] = useState<string>(mainCurrency)
  const data = useAppSelector(currencies(code))
  const dispatch = useAppDispatch()

  const handleCurrencyClick = (currency: string) => {
    setSelectedCurrency(currency)
  }

  useEffect(() => {
    if (
      !data ||
      new Date().getTime() - new Date(data.meta.last_updated_at).getTime() >
        CACHE_TIMEOUT
    ) {
      dispatch(fetchCurrencies(code))
    }
  }, [])

  return (
    <ModalItemContainer>
      <ModalItemConverterContainer>
        <ModalItemCurrentCurrencyImage src={currencyImages[code]} />
        <ModalItemTextContainer>
          <ModalItemLabel>{code + ' to ' + selectedCurrency}</ModalItemLabel>
          <ModalItemConvertedValue>
            {data?.data[selectedCurrency].value}
          </ModalItemConvertedValue>
        </ModalItemTextContainer>
      </ModalItemConverterContainer>
      <ModalItemCurrenciesContainer>
        {Object.entries(currencyImages).map(([currency, icon]) => (
          <ModalItemCurrencyImage
            src={icon}
            alt={currency}
            key={currency}
            isSelected={selectedCurrency === currency}
            onClick={() => handleCurrencyClick(currency)}
          />
        ))}
      </ModalItemCurrenciesContainer>
    </ModalItemContainer>
  )
}
