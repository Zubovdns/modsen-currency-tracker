import { FC } from 'react'
import { Navbar } from './Navbar'
import { Status } from './Status'
import { Title } from './Title'
import { HeaderContainer } from './styled'

export const Header: FC = () => {
  return (
    <HeaderContainer>
      <Navbar />
      <Title />
      <Status />
    </HeaderContainer>
  )
}
