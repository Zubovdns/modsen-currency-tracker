import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

export const FooterLinksContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 10vw;
`

export const FooterLinksDiv = styled.div``

export const FooterLinksLabel = styled.h2`
  margin-bottom: 20px;
  font-size: 1.5vw;
  color: #ffffff;

  padding-bottom: 1.5vw;
`

export const FooterLinksList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

export const FooterLinksListItem = styled.ul`
  margin: 2vw 0;
  font-size: 1.2vw;
`

export const FooterMobileInput = styled.input`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  cursor: pointer;
`

export const FooterMobileIcon = styled.img`
  width: 3vw;
`

export const FooterMobileLinksList = styled.ul`
  width: 100%;
  list-style: none;
  padding: 4vw;
  margin: 0;
  display: none;
`

export const FooterMobileLinksListItem = styled.li`
  margin: 2vw 0;
  font-size: 3vw;
`

export const FooterMobileLinksLinksLabel = styled.h2`
  font-size: 3vw;
  color: #ffffff;
`

export const FMLinksLinksList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #545454;
`

export const FooterMobileLinksLinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #545454;
`

export const FooterLink = styled(Link)`
  color: #888;
  text-decoration: none;

  &:hover {
    color: #fff;
  }
`

export const FMLabelContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2vw;
`

export const FMDiv = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 1px solid #545454;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  position: relative;

  & ${FooterMobileInput}:checked + ${FMLabelContainer} ${FooterMobileIcon} {
    transform: rotate(180deg);
  }

  & ${FooterMobileInput}:checked ~ ${FooterMobileLinksList} {
    display: block;
  }
`

export const FooterMobileLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding-left: 10vw;
  padding-right: 10vw;
`
