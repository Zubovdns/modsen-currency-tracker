interface Currency {
  code: string
  value: number
}

export interface CurrencyListItemProps {
  title: string
  data: Currency[]
}
