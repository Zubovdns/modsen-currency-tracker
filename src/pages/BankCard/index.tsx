import { Component } from 'react'
import { ErrorBoundary } from '@components/ErrorBoundary'

import { Props, State } from './types'

class BankCard extends Component<Props, State> {
  state = {}

  render() {
    return <ErrorBoundary>index</ErrorBoundary>
  }
}

export default BankCard
