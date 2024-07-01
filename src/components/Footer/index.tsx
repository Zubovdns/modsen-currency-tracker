import diagramLogo from '@assets/icons/diagramLogo.svg'
import { FC } from 'react'
import { LinksSection } from './LinksSection'
import {
  FOOTER_DESCRIPTION,
  FOOTER_DISCLAIMER,
  FOOTER_TITLE,
} from './constants'
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
            <FooterTitle>{FOOTER_TITLE}</FooterTitle>
          </FooterTitleContainer>
          <FooterSubText>{FOOTER_DESCRIPTION}</FooterSubText>
        </FooterTextContainer>
        <LinksSection />
      </FooterMainContainer>
      <FooterCreditsText>{FOOTER_DISCLAIMER}</FooterCreditsText>
    </FooterContainer>
  )
}
