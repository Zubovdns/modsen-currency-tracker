import { ChartData, ScriptableContext } from 'chart.js'

import { CustomDataPoint } from '../types'

function generateRandomDataPoint(date: Date): CustomDataPoint {
  const randomInRange = (min: number, max: number) =>
    Math.random() * (max - min) + min

  const o = randomInRange(30000, 60000)
  const h = randomInRange(o, o + 5000)
  const l = randomInRange(o - 5000, o)
  const c = randomInRange(l, h)
  const s: [number, number] = [o, c]

  return { x: date.getTime(), o, h, l, c, s }
}

const startDate = new Date('2024-06-01')
const transformedData: (number | [number, number] | null)[] = Array.from(
  { length: 30 },
  (_, i) => {
    const date = new Date(startDate)
    date.setDate(date.getDate() + i)
    const dataPoint = generateRandomDataPoint(date)
    return dataPoint as unknown as number | [number, number] | null
  }
)

export const mockData: ChartData<'bar', (number | [number, number] | null)[]> =
  {
    datasets: [
      {
        label: 'Weekly Sales',
        data: transformedData,
        backgroundColor: (ctx: ScriptableContext<'bar'>) => {
          const raw = ctx.raw as CustomDataPoint
          return raw.c < raw.o ? '#F00' : '#00BC4F'
        },
      },
    ],
  }
