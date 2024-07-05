import { connect, ConnectedProps } from 'react-redux'
import {
  clearChartData,
  setRandomChartData,
  setUserChartData,
} from '@store/slices/timelineSlice'
import { RootState } from '@store/types'
import { ScriptableContext } from 'chart.js'
import { DefaultTheme } from 'styled-components'

const mapStateToProps = (state: RootState) => ({
  data: state.timeline.currency,
})

const mapDispatchToProps = {
  setUserChartData,
  setRandomChartData,
  clearChartData,
}

export interface Props extends ConnectedProps<typeof connector> {
  theme: DefaultTheme
}

export const connector = connect(mapStateToProps, mapDispatchToProps)

export type State = Record<string, never>

export type CustomDataPoint = {
  x: number
  o: number
  h: number
  l: number
  c: number
  s: number[]
}

export type CustomChartDataset = {
  label: string
  data: CustomDataPoint[]
  backgroundColor: (ctx: ScriptableContext<'bar'>) => string
  borderColor: string[]
  borderWidth: number
}
