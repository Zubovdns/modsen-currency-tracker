type CustomDataPoint = {
  x: number
  o: number
  h: number
  l: number
  c: number
  s: number[]
}

const generateRandomNumberInRange = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1)) + min

export const generateDataPoints = (
  min: number,
  max: number
): (number | [number, number] | null)[] => {
  const dataPoints: (number | [number, number] | null)[] = []
  const currentDate = new Date()
  currentDate.setHours(0, 0, 0, 0)

  let previousClose = generateRandomNumberInRange(min, max)

  for (let i = 0; i < 30; i++) {
    const open = previousClose
    const close = generateRandomNumberInRange(min, max)
    const high = Math.max(open, close, generateRandomNumberInRange(open, max))
    const low = Math.min(open, close, generateRandomNumberInRange(min, close))

    const dataPoint: CustomDataPoint = {
      x: currentDate.getTime(),
      o: open,
      h: high,
      l: low,
      c: close,
      s: [open, close],
    }

    dataPoints.push(dataPoint as unknown as number | [number, number] | null)

    currentDate.setDate(currentDate.getDate() + 1)
    previousClose = close
  }

  return dataPoints
}
