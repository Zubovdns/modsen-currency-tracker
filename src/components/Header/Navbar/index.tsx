import diagramLogo from '@assets/icons/diagramLogo.svg'
import {
  BANK_CARD_ROUTE,
  CONTACT_ROUTE,
  HOME_ROUTE,
  TIMELINE_ROUTE,
} from '@constants/routes'
import { FC } from 'react'
import { ThemeSwitcher } from './ThemeSwitcher'
import {
  NavbarContainer,
  NavbarLink,
  NavbarLinksList,
  NavbarLinksListItem,
  NavbarLogo,
} from './styled'

const linksList = [
  { to: HOME_ROUTE, content: 'Home' },
  { to: TIMELINE_ROUTE, content: 'Timeline' },
  { to: BANK_CARD_ROUTE, content: 'Bank Card' },
  { to: CONTACT_ROUTE, content: 'Contact' },
]

export const Navbar: FC = () => {
  return (
    <NavbarContainer>
      <NavbarLogo src={diagramLogo} />
      <NavbarLinksList>
        {linksList.map((link, key) => (
          <NavbarLinksListItem key={key}>
            <NavbarLink to={link.to}>{link.content}</NavbarLink>
          </NavbarLinksListItem>
        ))}
      </NavbarLinksList>
      <ThemeSwitcher />
    </NavbarContainer>
  )
}
