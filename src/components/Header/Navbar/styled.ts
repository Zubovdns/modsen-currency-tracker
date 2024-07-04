import { Link } from 'react-router-dom'
import { device } from '@constants/breakpoints'
import styled from 'styled-components'

export const NavbarContainer = styled.nav`
  width: 100%;
  height: 7vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 5vw;
  padding-right: 5vw;
`

export const NavbarLink = styled(Link)`
  font-size: 1.5vw;
  color: ${({ theme }) => theme.navbarLinks};

  @media ${device.md} {
    font-size: 2.5vw;
    line-height: 120%;
  }

  @media ${device.sm} {
    font-size: 2.7vw;
  }

  @media ${device.xs} {
    font-size: 3vw;
  }
`

export const NavbarLinksList = styled.ul`
  list-style: none;
  display: flex;
  gap: 7vw;
`

export const NavbarLinksListItem = styled.li`
  margin: 0;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`

export const NavbarLogo = styled.img`
  width: 3vw;
`
