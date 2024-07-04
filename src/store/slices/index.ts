import { combineReducers } from '@reduxjs/toolkit'

import { currencySliceReducer } from './currencySlice'
import { themeSliceReducer } from './themeSlice'

export const rootReducer = combineReducers({
  currencies: currencySliceReducer,
  theme: themeSliceReducer,
})
