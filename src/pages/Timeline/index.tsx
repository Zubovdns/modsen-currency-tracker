import { Component } from 'react'
import { CandlestickChart } from '@components/CandlestickChart'
import { ErrorBoundary } from '@components/ErrorBoundary'

import { Props, State } from './types'

export default class Timeline extends Component<Props, State> {
  render() {
    return (
      <ErrorBoundary>
        <CandlestickChart />
      </ErrorBoundary>
    )
  }
}
