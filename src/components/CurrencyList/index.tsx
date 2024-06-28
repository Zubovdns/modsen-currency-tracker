import { FC } from 'react'
import { CurrencyContainer } from './styled'

export const CurrencyList: FC = () => {
  return (
    <CurrencyContainer>
      <div>
        <h3>Stocks</h3>
      </div>
      <div>
        <h3>Quotes</h3>
      </div>
    </CurrencyContainer>
  )
}
