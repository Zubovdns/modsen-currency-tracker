import { FC } from 'react'

import { PFContainer, PFMessage } from './styled'

export const PageFallback: FC = () => (
    <PFContainer>
      <PFMessage>Oops... Something went wrong.</PFMessage>
    </PFContainer>
  )
