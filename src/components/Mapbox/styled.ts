import { device } from '@constants/breakpoints'
import styled from 'styled-components'

export const Map = styled.div`
  width: 100%;
  height: 40vw;

  @media ${device.lg} {
    height: 50vw;
  }
  @media ${device.md} {
    height: 80vw;
  }
`
export const MapContainer = styled.div`
  width: 100%;
`
