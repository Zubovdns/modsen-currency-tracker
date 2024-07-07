import { lazy } from 'react'

const Home = lazy(() => import('@pages/Home'))
const Timeline = lazy(() => import('@pages/Timeline'))
const Contact = lazy(() => import('@pages/Contact'))

export const HOME_ROUTE = '/'
export const TIMELINE_ROUTE = '/timeline'
export const BANK_CARD_ROUTE = '/bank-card'
export const CONTACT_ROUTE = '/contact'

export const routes = [
  { path: HOME_ROUTE, Page: Home },
  { path: TIMELINE_ROUTE, Page: Timeline },
  { path: BANK_CARD_ROUTE, Page: 'div' },
  { path: CONTACT_ROUTE, Page: Contact },
]
