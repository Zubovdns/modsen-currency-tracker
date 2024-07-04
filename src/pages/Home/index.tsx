import { FC } from 'react'
import { Currency } from '@components/Currency'
import { ErrorBoundary } from '@components/ErrorBoundary'

const Home: FC = () => (
  <ErrorBoundary>
    <Currency />
  </ErrorBoundary>
)

export default Home
