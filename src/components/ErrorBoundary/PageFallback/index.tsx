import { FC } from 'react'
import { PFContainer, PFMessage } from './styled'

export const PageFallback: FC = () => {
  return (
    <PFContainer>
      <PFMessage>Oops... Something went wrong.</PFMessage>
    </PFContainer>
  )
}
