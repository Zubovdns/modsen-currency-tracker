import { generateDataPoints } from './generateDataPoints'

describe('generateDataPoints', () => {
  it('should generate an array of data points', () => {
    const min = 50
    const max = 100

    const dataPoints = generateDataPoints(min, max)

    expect(dataPoints).toHaveLength(30)

    dataPoints.forEach((dataPoint) => {
      expect(typeof dataPoint).toBe('object')
      expect(dataPoint).toHaveProperty('x', expect.any(Number))
      expect(dataPoint).toHaveProperty('o', expect.any(Number))
      expect(dataPoint).toHaveProperty('h', expect.any(Number))
      expect(dataPoint).toHaveProperty('l', expect.any(Number))
      expect(dataPoint).toHaveProperty('c', expect.any(Number))
      expect(dataPoint).toHaveProperty('s', expect.any(Array))
    })
  })
})
