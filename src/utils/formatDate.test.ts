import { formatDate } from './formatDate'

describe('formatDate', () => {
  test('should return an empty string if no date is provided', () => {
    expect(formatDate()).toBe('')
  })

  test('should format a valid ISO date string correctly', () => {
    const inputDate = '2024-07-09T14:30:00Z'
    const expectedOutput = '9 July, 5:30 PM'
    expect(formatDate(inputDate)).toBe(expectedOutput)
  })

  test('should handle an invalid date string gracefully', () => {
    const inputDate = 'invalid-date'
    expect(formatDate(inputDate)).toBe('Invalid Date')
  })
})
