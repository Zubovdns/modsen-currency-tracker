import { act } from 'react'
import { renderHook } from '@testing-library/react-hooks'

import { useWindowSize } from './useWindowSize'

describe('useWindowSize', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1024,
    })
  })

  afterAll(() => {
    delete (window as any).innerWidth
  })

  it('should initialize isMobile correctly based on window.innerWidth', () => {
    const { result } = renderHook(() => useWindowSize())
    expect(result.current).toBe(false)
  })

  it('should update isMobile state on window resize', () => {
    const { result } = renderHook(() => useWindowSize())

    act(() => {
      window.innerWidth = 500
      window.dispatchEvent(new Event('resize'))
    })
    expect(result.current).toBe(true)

    act(() => {
      window.innerWidth = 1024
      window.dispatchEvent(new Event('resize'))
    })
    expect(result.current).toBe(false)
  })

  it('should add and remove event listener on mount and unmount', () => {
    const addEventListenerSpy = jest.spyOn(window, 'addEventListener')
    const removeEventListenerSpy = jest.spyOn(window, 'removeEventListener')

    const { unmount } = renderHook(() => useWindowSize())

    expect(addEventListenerSpy).toHaveBeenCalledWith(
      'resize',
      expect.any(Function)
    )
    expect(removeEventListenerSpy).not.toHaveBeenCalled()

    unmount()

    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      'resize',
      expect.any(Function)
    )

    addEventListenerSpy.mockRestore()
    removeEventListenerSpy.mockRestore()
  })
})
