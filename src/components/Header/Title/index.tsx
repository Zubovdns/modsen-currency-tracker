import diagramLogo from '@assets/icons/diagramLogo.svg'
import { FC } from 'react'
import {
  TitleContainer,
  TitleLogo,
  TitleLogoContainer,
  TitleMainText,
  TitleSubText,
  TitleTextContainer,
} from './styled'

export const Title: FC = () => {
  return (
    <TitleContainer>
      <TitleTextContainer>
        <TitleMainText>Modsen Currency</TitleMainText>
        <TitleMainText>Tracker</TitleMainText>
        <TitleSubText>
          Quotes for the dollar and other international currencies.
        </TitleSubText>
      </TitleTextContainer>
      <TitleLogoContainer>
        <TitleLogo src={diagramLogo} />
      </TitleLogoContainer>
    </TitleContainer>
  )
}
