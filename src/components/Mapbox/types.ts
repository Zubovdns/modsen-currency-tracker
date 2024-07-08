import { Map } from 'mapbox-gl'

export type State = {
  map?: Map
}

export type Props = {
  banks: Bank[]
  selectedCurrency: string
}

export type Coordinates = {
  lat: number
  lng: number
}

export type Bank = {
  id: string
  name: string
  description: string
  currencies: string[]
  coordinates: Coordinates
}
