import { FC } from 'react'
import diagramLogo from '@assets/icons/diagramLogo.svg'

import {
  FOOTER_DESCRIPTION,
  FOOTER_DISCLAIMER,
  FOOTER_TITLE,
} from './constants'
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

export const Footer: FC = () => (
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
