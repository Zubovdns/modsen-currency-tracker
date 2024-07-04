import { FC } from 'react'
import diagramLogo from '@assets/icons/diagramLogo.svg'

import { HEADER_DESCRIPTION, HEADER_TITLE_1, HEADER_TITLE_2 } from './constants'
import {
  TitleContainer,
  TitleLogo,
  TitleLogoContainer,
  TitleMainText,
  TitleSubText,
  TitleTextContainer,
} from './styled'

export const Title: FC = () => (
    <TitleContainer>
      <TitleTextContainer>
        <TitleMainText>{HEADER_TITLE_1}</TitleMainText>
        <TitleMainText>{HEADER_TITLE_2}</TitleMainText>
        <TitleSubText>{HEADER_DESCRIPTION}</TitleSubText>
      </TitleTextContainer>
      <TitleLogoContainer>
        <TitleLogo src={diagramLogo} />
      </TitleLogoContainer>
    </TitleContainer>
  )
