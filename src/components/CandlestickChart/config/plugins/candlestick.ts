import { CustomDataPoint } from '@components/CandlestickChart/types'
import { Plugin } from 'chart.js'

export const candlestick: Plugin<'bar'> = {
  id: 'candlestick',
  beforeDatasetsDraw(chart) {
    const {
      ctx,
      data,
      scales: { y },
    } = chart

    if (!ctx || !data.datasets.length) return

    ctx.save()
    ctx.lineWidth = 2

    const dataset = data.datasets[0].data as unknown as CustomDataPoint[]
    const meta = chart.getDatasetMeta(0)

    dataset.forEach((datapoint, index) => {
      const xPixel = meta.data[index]?.x ?? 0
      const yPixel = meta.data[index]?.y ?? 0

      ctx.strokeStyle = datapoint.c < datapoint.o ? '#F00' : '#00BC4F'

      ctx.beginPath()
      ctx.moveTo(xPixel, yPixel)
      ctx.lineTo(xPixel, y.getPixelForValue(datapoint.h))
      ctx.stroke()

      ctx.beginPath()
      ctx.moveTo(xPixel, yPixel)
      ctx.lineTo(xPixel, y.getPixelForValue(datapoint.l))
      ctx.stroke()
    })

    ctx.restore()
  },
}
