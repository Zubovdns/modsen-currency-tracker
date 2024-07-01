import { CurrencyListItemProps } from '@src/interfaces/currencies'
import { CurrencyItem } from './CurrencyItem'
import {
  CurrencyListContainer,
  CurrencyListTitle,
  CurrencyListTitleBox,
} from './styled'

export const CurrencyList: React.FC<CurrencyListItemProps> = ({
  title,
  data,
}) => {
  return (
    <CurrencyListContainer>
      <CurrencyListTitleBox>
        <CurrencyListTitle>{title}</CurrencyListTitle>
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
}