import { CACHE_TIMEOUT } from '@constants/currencyApi'
import { useAppDispatch, useAppSelector } from '@store/hooks/hooks'
import { currencies } from '@store/selectors/currenciesSelectors'
import { fetchCurrencies } from '@store/thunks/fetchCurrencies'
import { FC, useEffect } from 'react'
import { CurrencyList } from './CurrencyList'
import { CurrencyContainer } from './styled'

export const Currency: FC = () => {
  const dispatch = useAppDispatch()
  const data = useAppSelector(currencies())

  useEffect(() => {
    if (
      !data ||
      new Date().getTime() - new Date(data.meta.last_updated_at).getTime() >
        CACHE_TIMEOUT
    ) {
      dispatch(fetchCurrencies())
    }
  }, [])

  return (
    <CurrencyContainer>
      <CurrencyList title="Quotes" data={data?.data} />
    </CurrencyContainer>
  )
}
