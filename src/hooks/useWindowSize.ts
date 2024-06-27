import { useEffect, useState } from 'react'

const MOBILE_WINDOW_SIZE: number = 768

const useWindowSize = (): boolean => {
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

export default useWindowSize
