import circleLastUpdate from '@assets/icons/circleLastUpdate.svg'
import { FC } from 'react'
import { LastUpdateSvg, LastUpdateText, StatusContainer } from './styled'

export const Status: FC = () => {
  return (
    <StatusContainer>
      <LastUpdateSvg src={circleLastUpdate} />
      <LastUpdateText>Last updated at 11:59pm</LastUpdateText>
    </StatusContainer>
  )
}
