import { Component, createRef } from 'react'
import { chartObserver } from '@utils/Observable/initialization'
import { Chart, registerables } from 'chart.js'
import { withTheme } from 'styled-components'

import { config } from './config/config'
import { ChartBox, ChartCard } from './styled'
import { connector, Props, State } from './types'

class CandlestickChartClass extends Component<Props, State> {
  private chartRef = createRef<HTMLCanvasElement>()
  private chartInstance: Chart | undefined

  state: State = {}

  componentDidMount() {
    this.initChart()
  }

  componentDidUpdate(prevProps: Props) {
    if (
      prevProps.theme !== this.props.theme ||
      prevProps.data !== this.props.data
    ) {
      this.updateChart()
      chartObserver.notify(true)
    }
  }

  componentWillUnmount() {
    this.destroyChart()
  }

  initChart = () => {
    Chart.register(...registerables)

    if (this.chartRef.current) {
      this.chartInstance = new Chart(
        this.chartRef.current,
        config(this.props.theme, this.props.data)
      )
    }
  }

  updateChart = () => {
    this.destroyChart()
    this.initChart()
  }

  destroyChart = () => {
    if (this.chartInstance) {
      this.chartInstance.destroy()
      this.chartInstance = undefined
    }
  }

  render() {
    return (
      <ChartCard>
        <ChartBox>
          <canvas ref={this.chartRef} />
        </ChartBox>
      </ChartCard>
    )
  }
}

export const CandlestickChart = withTheme(connector(CandlestickChartClass))
