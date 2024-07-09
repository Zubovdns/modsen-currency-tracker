import { CACHE_TIMEOUT } from '@constants/currencyApi'
import { SelectedCurrencyData } from '@interfaces/currencies'

import { checkCacheExpiration } from './checkCacheExpiration'

describe('checkCacheExpiration', () => {
  it('should return true if data is null or undefined', () => {
    expect(checkCacheExpiration(null as any)).toBe(true)
    expect(checkCacheExpiration(undefined as any)).toBe(true)
  })

  it('should return true if the data is expired', () => {
    const data: SelectedCurrencyData = {
      data: {
        USD: { code: 'USD', value: 1 },
      },
      meta: {
        last_updated_at: new Date(
          Date.now() - CACHE_TIMEOUT - 1000
        ).toISOString(),
      },
    }

    expect(checkCacheExpiration(data)).toBe(true)
  })

  it('should return false if the data is not expired', () => {
    const data: SelectedCurrencyData = {
      data: {
        USD: { code: 'USD', value: 1 },
      },
      meta: {
        last_updated_at: new Date(
          Date.now() - CACHE_TIMEOUT + 1000
        ).toISOString(),
      },
    }

    expect(checkCacheExpiration(data)).toBe(false)
  })

  it('should handle cases where the last_updated_at is in the future', () => {
    const data: SelectedCurrencyData = {
      data: {
        USD: { code: 'USD', value: 1 },
      },
      meta: {
        last_updated_at: new Date(Date.now() + 1000).toISOString(),
      },
    }

    expect(checkCacheExpiration(data)).toBe(false)
  })
})
