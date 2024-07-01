import { DARK } from '@constants/theme'
import { ThemeInitialState } from '@interfaces/theme'
import { createSlice } from '@reduxjs/toolkit'

const initialState: ThemeInitialState = {
  mode: DARK,
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.mode = action.payload
    },
  },
})

export const themeSliceReducer = themeSlice.reducer
export const { setTheme } = themeSlice.actions
