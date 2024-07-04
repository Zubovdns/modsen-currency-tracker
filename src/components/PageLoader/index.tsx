import { FC } from 'react'

import { PLContainer, PLSpinner } from './styled'

export const PageLoader: FC = () => (
    <PLContainer>
      <PLSpinner />
    </PLContainer>
  )
