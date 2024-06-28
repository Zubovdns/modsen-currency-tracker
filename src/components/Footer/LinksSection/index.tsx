import linksArrow from '@assets/icons/linksArrow.svg'
import { useWindowSize } from '@hooks/useWindowSize'
import { FC } from 'react'
import { menuData } from './config'
import {
  FooterLink,
  FooterLinksContainer,
  FooterMobileLinksContainer,
} from './styled'

export const LinksSection: FC = () => {
  const isMobile = useWindowSize()
  return (
    <>
      {isMobile ? (
        <FooterMobileLinksContainer>
          {menuData.map((menu, index) => (
            <>
              <div key={index}>
                <input type="checkbox" />
                <div>
                  <h2>{menu.title}</h2>
                  <img src={linksArrow}></img>
                </div>
                <ul>
                  {menu.items.map((item, idx) => (
                    <li key={idx}>
                      <FooterLink to={item.to}>{item.name}</FooterLink>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          ))}
        </FooterMobileLinksContainer>
      ) : (
        <FooterLinksContainer>
          {menuData.map((menu, index) => (
            <div key={index}>
              <h2>{menu.title}</h2>
              <ul>
                {menu.items.map((item, idx) => (
                  <li key={idx}>
                    <FooterLink to={item.to}>{item.name}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </FooterLinksContainer>
      )}
    </>
  )
}
