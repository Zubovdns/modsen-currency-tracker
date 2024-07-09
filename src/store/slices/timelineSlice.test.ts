import { TimelineInitialState } from '@interfaces/timeline'
import { generateDataPoints } from '@utils/generateDataPoints'

import {
  clearChartData,
  setRandomChartData,
  setUserChartData,
  timelineSliceReducer,
} from './timelineSlice'

jest.mock('@utils/generateDataPoints')

describe('timelineSlice', () => {
  const initialState: TimelineInitialState = {
    currency: [],
  }

  it('should return the initial state', () => {
    expect(timelineSliceReducer(undefined, { type: '@@INIT' })).toEqual(
      initialState
    )
  })

  it('should handle setUserChartData', () => {
    const userChartData: (number | [number, number] | null)[] = [
      100,
      [150, 200],
      null,
    ]
    const newState = timelineSliceReducer(
      initialState,
      setUserChartData(userChartData)
    )
    expect(newState.currency).toEqual(userChartData)
  })

  it('should handle setRandomChartData', () => {
    const randomData: (number | [number, number] | null)[] = [
      100,
      [150, 200],
      null,
    ]
    ;(generateDataPoints as jest.Mock).mockReturnValue(randomData)
    const newState = timelineSliceReducer(initialState, setRandomChartData())
    expect(newState.currency).toEqual(randomData)
  })

  it('should handle clearChartData', () => {
    const filledState: TimelineInitialState = {
      currency: [100, [150, 200], null],
    }
    const newState = timelineSliceReducer(filledState, clearChartData())
    expect(newState.currency).toEqual([])
  })
})
