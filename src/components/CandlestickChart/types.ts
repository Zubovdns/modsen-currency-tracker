import { ScriptableContext } from 'chart.js'
import { DefaultTheme } from 'styled-components'

export type Props = {
  theme: DefaultTheme
}

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
