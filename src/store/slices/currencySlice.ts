import { createSlice,PayloadAction } from '@reduxjs/toolkit'
import {
  CurrencyInitialState,
  ReturnsFetchCurrenciesData,
} from '@src/interfaces/currencies'
import { fetchCurrencies } from '@store/thunks/fetchCurrencies'

const initialState: CurrencyInitialState = {
  homeCurrencies: {},
  status: '',
}

export const currencySliceReducer = createSlice({
  name: 'currencies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrencies.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(
        fetchCurrencies.fulfilled,
        (state, action: PayloadAction<ReturnsFetchCurrenciesData>) => {
          state.homeCurrencies = { ...state.homeCurrencies, ...action.payload }
          state.status = 'done'
        }
      )
      .addCase(fetchCurrencies.rejected, (state) => {
        state.status = 'failed'
      })
  },
}).reducer
