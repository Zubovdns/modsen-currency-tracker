import { useEffect, useState } from 'react'

const MOBILE_WINDOW_SIZE: number = 768

export const useWindowSize = () => {
  const [isMobile, setIsMobile] = useState<boolean>(
    window.innerWidth <= MOBILE_WINDOW_SIZE
  )

  const handleResize = () => {
    setIsMobile(window.innerWidth <= MOBILE_WINDOW_SIZE)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return isMobile
}
