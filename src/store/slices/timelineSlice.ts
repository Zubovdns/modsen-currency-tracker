import {
  ReturnsFetchTimelineData,
  TimelineInitialState,
} from '@interfaces/timeline'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchTimeline } from '@store/thunks/fetchTimeline'

const initialState: TimelineInitialState = {
  currency: {},
  status: '',
}

export const timelineSliceReducer = createSlice({
  name: 'timeline',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTimeline.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(
        fetchTimeline.fulfilled,
        (state, action: PayloadAction<ReturnsFetchTimelineData>) => {
          state.currency = { ...state.currency, ...action.payload }
          state.status = 'done'
        }
      )
      .addCase(fetchTimeline.rejected, (state) => {
        state.status = 'failed'
      })
  },
}).reducer
