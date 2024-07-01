import diagramLogo from '@assets/icons/diagramLogo.svg'
import { FC } from 'react'
import { LinksSection } from './LinksSection'
import {
  FooterContainer,
  FooterCreditsText,
  FooterMainContainer,
  FooterSubText,
  FooterTextContainer,
  FooterTitle,
  FooterTitleContainer,
  FooterTitleImage,
} from './styled'

export const Footer: FC = () => {
  return (
    <FooterContainer>
      <FooterMainContainer>
        <FooterTextContainer>
          <FooterTitleContainer>
            <FooterTitleImage src={diagramLogo} />
            <FooterTitle>Modsen Currency Tracker</FooterTitle>
          </FooterTitleContainer>
          <FooterSubText>
            Since then, the company has grown organically to. Starsup is the
            world&apos;s largest trading platform, with $12 billion worth of
            currency trading and 500,000 tickets sold daily to tens of thousands
            of traders worldwide.
          </FooterSubText>
        </FooterTextContainer>
        <LinksSection />
      </FooterMainContainer>
      <FooterCreditsText>
        Startsup © 2023-2024, All Rights Reserved
      </FooterCreditsText>
    </FooterContainer>
  )
}
