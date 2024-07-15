import { Navbar } from './Navbar'
import { Status } from './Status'
import { HeaderContainer } from './styled'
import { Title } from './Title'

export const Header = () => (
  <HeaderContainer>
    <Navbar />
    <Title />
    <Status />
  </HeaderContainer>
)
