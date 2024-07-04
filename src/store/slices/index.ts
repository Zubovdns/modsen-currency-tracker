import { combineReducers } from '@reduxjs/toolkit'
import { currencySliceReducer } from './currencySlice'
import { themeSliceReducer } from './themeSlice'
import { timelineSliceReducer } from './timelineSlice'

export const rootReducer = combineReducers({
  currencies: currencySliceReducer,
  theme: themeSliceReducer,
  timeline: timelineSliceReducer,
})
