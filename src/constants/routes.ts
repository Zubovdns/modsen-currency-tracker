import { Home } from '@pages/Home'

export const HOME_ROUTE = '/'
export const TIMELINE_ROUTE = '/timeline'
export const BANK_CARD_ROUTE = '/bank-card'
export const CONTACT_ROUTE = '/contact'

export const routes = [
  { path: HOME_ROUTE, Page: Home },
  { path: TIMELINE_ROUTE, Page: 'timeline' },
  { path: BANK_CARD_ROUTE, Page: 'bank-card' },
  { path: CONTACT_ROUTE, Page: 'contact' },
]
