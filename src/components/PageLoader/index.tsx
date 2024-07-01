import { FC } from 'react'
import { PLContainer, PLSpinner } from './styled'

export const PageLoader: FC = () => {
  return (
    <PLContainer>
      <PLSpinner />
    </PLContainer>
  )
}
