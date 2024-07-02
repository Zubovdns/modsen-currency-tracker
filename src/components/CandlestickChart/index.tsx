import { Chart, registerables } from 'chart.js'
import { Component, createRef } from 'react'
import { config } from './config'
import { ChartBox, ChartCard } from './styled'
import { Props, State } from './types'

export class CandlestickChart extends Component<Props, State> {
  private chartRef = createRef<HTMLCanvasElement>()
  private chartInstance: Chart | undefined

  state: State = {
    chartVersion: '',
  }

  componentDidMount() {
    this.initChart()
  }

  componentWillUnmount() {
    this.destroyChart()
  }

  initChart() {
    Chart.register(...registerables)

    if (this.chartRef.current) {
      this.chartInstance = new Chart(this.chartRef.current, config)
      this.setState({ chartVersion: Chart.version })
    }
  }

  destroyChart() {
    if (this.chartInstance) {
      this.chartInstance.destroy()
    }
  }

  render() {
    return (
      <>
        <ChartCard>
          <ChartBox>
            <canvas ref={this.chartRef}></canvas>
          </ChartBox>
        </ChartCard>
      </>
    )
  }
}
