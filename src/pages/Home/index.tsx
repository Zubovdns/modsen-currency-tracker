import { Currency } from '@components/Currency'
import ErrorBoundary from '@components/ErrorBoundary'
import { FC } from 'react'

const Home: FC = () => {
  return (
    <ErrorBoundary>
      <Currency />
    </ErrorBoundary>
  )
}

export default Home
