import { BASE_CURRENCY } from '@constants/currencyApi'
import { RootState } from '@store/types'

export const currencies =
  (code: string = BASE_CURRENCY) =>
  (state: RootState) =>
    state.currencies.homeCurrencies[code]
