import { FC } from 'react'

import { Navbar } from './Navbar'
import { Status } from './Status'
import { HeaderContainer } from './styled'
import { Title } from './Title'

export const Header: FC = () => (
    <HeaderContainer>
      <Navbar />
      <Title />
      <Status />
    </HeaderContainer>
  )
