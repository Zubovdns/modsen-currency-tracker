import { FC } from 'react'
import { Navbar } from './Navbar'
import { HeaderContainer } from './styled'

export const Header: FC = () => {
  return (
    <HeaderContainer>
      <Navbar />
    </HeaderContainer>
  )
}
