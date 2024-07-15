import { Currency } from '@components/Currency'
import { ErrorBoundary } from '@components/ErrorBoundary'

const Home = () => (
  <ErrorBoundary>
    <Currency />
  </ErrorBoundary>
)

export default Home
