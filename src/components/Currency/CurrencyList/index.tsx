import { CurrencyListItemProps } from '@src/interfaces/currencies'

import { CurrencyItem } from './CurrencyItem'
import {
  CurrencyListContainer,
  CurrencyListTitle,
  CurrencyListTitleBox,
} from './styled'

export const CurrencyList = ({ title, data }: CurrencyListItemProps) => (
  <CurrencyListContainer>
    <CurrencyListTitleBox>
      <CurrencyListTitle data-testid="currency-title">
        {title}
      </CurrencyListTitle>
    </CurrencyListTitleBox>
    {data &&
      Object.values(data).map((curr) => (
        <CurrencyItem
          key={curr.code}
          code={curr.code}
          value={curr.value}
        ></CurrencyItem>
      ))}
  </CurrencyListContainer>
)
