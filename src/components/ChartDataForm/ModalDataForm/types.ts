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

export const connector = connect(mapStateToProps, mapDispatchToProps)

export interface Props extends ConnectedProps<typeof connector> {
  onClose: () => void
}

export interface Field {
  id: string
  o: string
  h: string
  l: string
  c: string
}

export interface FieldError {
  id: string
  o: boolean
  h: boolean
  l: boolean
  c: boolean
}

export type State = {
  date: string
  fields: Field[]
  errors: FieldError[]
}
