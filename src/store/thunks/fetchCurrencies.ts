import axios from 'axios'

import {
  BASE_CURRENCY,
  CURRENCIES,
  CURRENCY_API_URL,
} from '@constants/currencyApi'
import { ReturnsFetchCurrenciesData } from '@interfaces/currencies'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchCurrencies = createAsyncThunk<
  ReturnsFetchCurrenciesData,
  string | undefined
>('currencies/fetchCurrencies', async (base_currency = BASE_CURRENCY) => {
  try {
    const res = await axios.get(CURRENCY_API_URL, {
      params: {
        currencies: CURRENCIES,
        base_currency,
      },
    })
    return {
      [base_currency]: res.data,
    }
  } catch (error) {
    throw new Error('Error/fetchCurrencies')
  }
})
