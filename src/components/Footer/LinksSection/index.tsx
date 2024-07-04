import { FC } from 'react'
import linksArrow from '@assets/icons/linksArrow.svg'
import { useWindowSize } from '@hooks/useWindowSize'

import { menuData } from './config'
import {
  FMDiv,
  FMLabelContainer,
  FooterLink,
  FooterLinksContainer,
  FooterLinksDiv,
  FooterLinksLabel,
  FooterLinksList,
  FooterLinksListItem,
  FooterMobileIcon,
  FooterMobileInput,
  FooterMobileLinksContainer,
  FooterMobileLinksLinksLabel,
  FooterMobileLinksList,
  FooterMobileLinksListItem,
} from './styled'

export const LinksSection: FC = () => {
  const isMobile = useWindowSize()
  return (
    <>
      {isMobile ? (
        <FooterMobileLinksContainer>
          {menuData.map((menu, index) => (
            <FMDiv key={index}>
              <FooterMobileInput type="checkbox" />
              <FMLabelContainer>
                <FooterMobileLinksLinksLabel>
                  {menu.title}
                </FooterMobileLinksLinksLabel>
                <FooterMobileIcon src={linksArrow} />
              </FMLabelContainer>
              <FooterMobileLinksList>
                {menu.items.map((item, idx) => (
                  <FooterMobileLinksListItem key={idx}>
                    <FooterLink to={item.to}>{item.name}</FooterLink>
                  </FooterMobileLinksListItem>
                ))}
              </FooterMobileLinksList>
            </FMDiv>
          ))}
        </FooterMobileLinksContainer>
      ) : (
        <FooterLinksContainer>
          {menuData.map((menu, index) => (
            <FooterLinksDiv key={index}>
              <FooterLinksLabel>{menu.title}</FooterLinksLabel>
              <FooterLinksList>
                {menu.items.map((item, idx) => (
                  <FooterLinksListItem key={idx}>
                    <FooterLink to={item.to}>{item.name}</FooterLink>
                  </FooterLinksListItem>
                ))}
              </FooterLinksList>
            </FooterLinksDiv>
          ))}
        </FooterLinksContainer>
      )}
    </>
  )
}
