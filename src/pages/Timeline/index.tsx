import { Component } from 'react'
import { CandlestickChart } from '@components/CandlestickChart'
import { ChartDataForm } from '@components/ChartDataForm'
import { ErrorBoundary } from '@components/ErrorBoundary'
import { Notification } from '@components/Notification'
import { chartObserver } from '@components/Observable/initialization'

import { SUCCESS_MESSAGE } from './constants'
import { Props, State } from './types'

export default class Timeline extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      isNotificationActive: false,
    }
  }

  componentDidMount(): void {
    chartObserver.subscribe(this.handleNotificationOpen)
  }

  componentWillUnmount(): void {
    chartObserver.unsubscribe(this.handleNotificationOpen)
  }

  handleNotificationOpen = () => {
    this.setState({
      isNotificationActive: true,
    })
  }

  handleNotificationClose = () => {
    this.setState({
      isNotificationActive: false,
    })
  }

  render() {
    return (
      <ErrorBoundary>
        <ChartDataForm />
        <CandlestickChart />
        {this.state.isNotificationActive && (
          <Notification
            onClose={this.handleNotificationClose}
            message={SUCCESS_MESSAGE}
          />
        )}
      </ErrorBoundary>
    )
  }
}
