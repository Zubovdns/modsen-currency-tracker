import { mock } from '@constants/currencyApi'
import { FC } from 'react'
import { CurrencyList } from './CurrencyList'
import { CurrencyContainer } from './styled'

export const Currency: FC = () => {
  return (
    <CurrencyContainer>
      {/* <CurrencyList title="Stocks" data={} /> */}
      <CurrencyList title="Quotes" data={mock.data} />
    </CurrencyContainer>
  )
}
