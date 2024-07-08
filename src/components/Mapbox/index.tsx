import React, { Component } from 'react'
import mapboxgl, { Marker } from 'mapbox-gl'

import {
  MAPBOX_ERROR_MESSAGE,
  MAPBOX_STYLE,
  VITEBSK_LAT,
  VITEBSK_LNG,
} from './constants'
import { Map, MapContainer } from './styled'
import { Props, State } from './types'

const mapboxToken = process.env.MAPBOX_API_TOKEN
if (!mapboxToken) {
  throw new Error(MAPBOX_ERROR_MESSAGE)
}
mapboxgl.accessToken = mapboxToken

export const Mapbox = class Mapbox extends Component<Props, State> {
  private mapRef: React.RefObject<HTMLDivElement>
  private markers: Marker[] = []

  constructor(props: Props) {
    super(props)
    this.state = {
      map: undefined,
    }
    this.mapRef = React.createRef()
  }

  componentDidMount() {
    const { banks } = this.props

    const map = new mapboxgl.Map({
      container: this.mapRef.current as HTMLElement,
      style: MAPBOX_STYLE,
      center: [VITEBSK_LNG, VITEBSK_LAT],
      zoom: 12,
    })

    map.on('load', () => {
      this.addMarkers(banks)
    })

    this.setState({ map })
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.selectedCurrency !== this.props.selectedCurrency) {
      this.updateMarkers()
    }
  }

  addMarkers(banks: Props['banks']) {
    banks.forEach((bank) => {
      const popupContent = `
        <div>
          <h3>${bank.name}</h3>
          <p>${bank.description}</p>
          <p>${bank.currencies}</p>
        </div>
      `
      const marker = new Marker()
        .setLngLat([bank.coordinates.lng, bank.coordinates.lat])
        .setPopup(new mapboxgl.Popup({ offset: 40 }).setHTML(popupContent))
        .addTo(this.state.map!)

      this.markers.push(marker)
    })
  }

  clearMarkers() {
    this.markers.forEach((marker) => marker.remove())
    this.markers = []
  }

  updateMarkers() {
    const { banks, selectedCurrency } = this.props

    this.clearMarkers()

    const filteredBanks = selectedCurrency
      ? banks.filter((bank) => bank.currencies.includes(selectedCurrency))
      : banks

    this.addMarkers(filteredBanks)
  }

  render() {
    return (
      <MapContainer>
        <Map ref={this.mapRef} />
      </MapContainer>
    )
  }
}
