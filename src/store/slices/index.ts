import { combineReducers } from '@reduxjs/toolkit'
import { currencySlice } from './currencySlice'

export const rootReducer = combineReducers({ currencies: currencySlice })
