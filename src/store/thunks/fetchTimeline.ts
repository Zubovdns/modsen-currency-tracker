import axios from 'axios'

import {
  TIMELINE_API_KEY,
  TIMELINE_API_URL,
  TIMELINE_BASE_CURRENCY,
} from '@constants/timelineApi'
import {
  ArgumentsFetchTimelineData,
  ReturnsFetchTimelineData,
} from '@interfaces/timeline'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchTimeline = createAsyncThunk<
  ReturnsFetchTimelineData,
  ArgumentsFetchTimelineData
>(
  'currencies/fetchTimeline',
  async ({ periodId, currencyTo, baseCurrency = TIMELINE_BASE_CURRENCY }) => {
    try {
      const res = await axios.get(
        TIMELINE_API_URL + currencyTo + '_' + baseCurrency,
        {
          headers: {
            'X-CoinAPI-Key': TIMELINE_API_KEY,
          },
          params: {
            period_id: periodId,
          },
        }
      )
      return {
        [baseCurrency]: {
          [currencyTo]: {
            [periodId]: res.data,
          },
        },
      }
    } catch (error) {
      throw new Error('Error/fetchTimeline')
    }
  }
)
