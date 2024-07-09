import { DARK, LIGHT } from '@constants/theme'
import { ThemeInitialState } from '@interfaces/theme'

import { setTheme, themeSliceReducer } from './themeSlice'

const initialState: ThemeInitialState = {
  mode: DARK,
}

describe('themeSlice', () => {
  it('should return the initial state', () => {
    expect(themeSliceReducer(undefined, { type: '@@INIT' })).toEqual(
      initialState
    )
  })

  it('should handle setTheme', () => {
    const newState = themeSliceReducer(initialState, setTheme(LIGHT))
    expect(newState.mode).toEqual(LIGHT)
  })
})
