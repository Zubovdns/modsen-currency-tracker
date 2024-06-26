import { Link } from 'react-router-dom'
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
  color: white;
  font-family: Arial, sans-serif;
`

export const NavbarLinksList = styled.ul`
  list-style: none;
  display: flex;
  gap: 7vw;
`

export const NavbarLinksListItem = styled.li`
  margin: 0;
`

export const NavbarLogo = styled.img`
  width: 3vw;
`
