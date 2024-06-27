import { MenuSection } from './types'

export const menuData: MenuSection[] = [
  {
    title: 'General',
    items: [
      { name: 'Market', to: '/' },
      { name: 'Service', to: '/' },
    ],
  },
  {
    title: 'Product',
    items: [
      { name: 'Sparks', to: '/' },
      { name: 'Snaps', to: '/' },
    ],
  },
  {
    title: 'Community',
    items: [
      { name: 'Ideas', to: '/' },
      { name: 'Streams', to: '/' },
    ],
  },
]
