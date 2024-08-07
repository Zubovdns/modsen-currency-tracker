import {
  BASE_CURRENCY,
  CURRENCIES,
  CURRENCY_API_URL,
} from '@constants/currencyApi'
import { ReturnsFetchCurrenciesData } from '@interfaces/currencies'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchCurrencies = createAsyncThunk<
  ReturnsFetchCurrenciesData,
  string | undefined
>('currencies/fetchCurrencies', async (base_currency = BASE_CURRENCY) => {
  try {
    const res = await axios.get(CURRENCY_API_URL, {
      headers: {
        apikey: process.env.CURRENCY_API_KEY,
      },
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
