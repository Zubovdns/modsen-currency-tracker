import { CurrencyItem } from './CurrencyItem'
import {
  CurrencyListContainer,
  CurrencyListTitle,
  CurrencyListTitleBox,
} from './styled'
import { CurrencyListItemProps } from './types'

export const CurrencyList: React.FC<CurrencyListItemProps> = ({
  title,
  data,
}) => {
  return (
    <CurrencyListContainer>
      <CurrencyListTitleBox>
        <CurrencyListTitle>{title}</CurrencyListTitle>
      </CurrencyListTitleBox>
      {data.map((curr) => (
        <CurrencyItem
          key={curr.code}
          code={curr.code}
          value={curr.value}
        ></CurrencyItem>
      ))}
    </CurrencyListContainer>
  )
}
