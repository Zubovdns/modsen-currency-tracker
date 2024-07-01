import diagramLogo from '@assets/icons/diagramLogo.svg'
import { FC } from 'react'
import { ThemeSwitcher } from '../ThemeSwitcher'
import { NAVBAR_LINKS_LIST } from './constants'
import {
  NavbarContainer,
  NavbarLink,
  NavbarLinksList,
  NavbarLinksListItem,
  NavbarLogo,
} from './styled'

export const Navbar: FC = () => {
  return (
    <NavbarContainer>
      <NavbarLogo src={diagramLogo} />
      <NavbarLinksList>
        {NAVBAR_LINKS_LIST.map((link, key) => (
          <NavbarLinksListItem key={key}>
            <NavbarLink to={link.to}>{link.content}</NavbarLink>
          </NavbarLinksListItem>
        ))}
      </NavbarLinksList>
      <ThemeSwitcher />
    </NavbarContainer>
  )
}
