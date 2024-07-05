import { TimelineInitialState } from '@interfaces/timeline'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { generateDataPoints } from '@utils/generateDataPoints'

const initialState: TimelineInitialState = {
  currency: [],
}

const timelineSlice = createSlice({
  name: 'timeline',
  initialState,
  reducers: {
    setUserChartData: (
      state,
      action: PayloadAction<(number | [number, number] | null)[]>
    ) => {
      state.currency = action.payload
    },
    setRandomChartData: (state) => {
      state.currency = generateDataPoints(10000, 60000)
    },
    clearChartData: (state) => {
      state.currency = []
    },
  },
})

export const { setUserChartData, setRandomChartData, clearChartData } =
  timelineSlice.actions
export const timelineSliceReducer = timelineSlice.reducer
