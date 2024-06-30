export interface CurrencyData {
  code: string
  value: number
}

export interface CurrencyListItemProps {
  title: string
  data: { [key: string]: CurrencyData }
}

export interface CurrencyInitialState {
  homeCurrencies: { [key: string]: SelectedCurrencyData }
  status: string
}

export interface SelectedCurrencyData {
  data: { [key: string]: CurrencyData }
  meta: CurrencyMeta
}

export interface CurrencyMeta {
  last_updated_at: string
}

export interface ReturnsFetchCurrenciesData {
  [key: string]: SelectedCurrencyData
}
