import { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@store/hooks/hooks'
import { currencies } from '@store/selectors/currenciesSelectors'
import { fetchCurrencies } from '@store/thunks/fetchCurrencies'
import { checkCacheExpiration } from '@utils/checkCacheExpiration'

import { CurrencyList } from './CurrencyList'
import { CurrencyContainer } from './styled'

export const Currency: FC = () => {
  const dispatch = useAppDispatch()
  const data = useAppSelector(currencies())

  useEffect(() => {
    if (checkCacheExpiration(data)) {
      dispatch(fetchCurrencies())
    }
  }, [])

  return (
    <CurrencyContainer>
      <CurrencyList title="Quotes" data={data.data} />
    </CurrencyContainer>
  )
}
