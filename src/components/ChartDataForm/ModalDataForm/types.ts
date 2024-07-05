import { connect, ConnectedProps } from 'react-redux'
import {
  clearChartData,
  setRandomChartData,
  setUserChartData,
} from '@store/slices/timelineSlice'

const mapStateToProps = () => ({})

const mapDispatchToProps = {
  setUserChartData,
  setRandomChartData,
  clearChartData,
}

export interface Props extends ConnectedProps<typeof connector> {
  onClose: () => void
}

export const connector = connect(mapStateToProps, mapDispatchToProps)
export interface Field {
  o: string
  h: string
  l: string
  c: string
}

export type State = {
  date: string
  fields: Field[]
}
