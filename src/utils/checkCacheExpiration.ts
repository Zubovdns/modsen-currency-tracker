import { CACHE_TIMEOUT } from '@constants/currencyApi'
import { SelectedCurrencyData } from '@interfaces/currencies'

export const checkCacheExpiration = (data: SelectedCurrencyData) =>
  !data ||
  new Date().getTime() - new Date(data.meta.last_updated_at).getTime() >
    CACHE_TIMEOUT
