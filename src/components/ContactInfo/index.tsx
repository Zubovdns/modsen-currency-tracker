import {
  CONTACT_ADDRESS,
  CONTACT_EMAIL,
  CONTACT_PHONE_NUMBER,
  CONTACT_TITLE,
} from './constants'
import { InfoContainer, InfoText, InfoTitle } from './styled'

export const ContactInfo: React.FC = () => (
  <InfoContainer>
    <InfoTitle>{CONTACT_TITLE}</InfoTitle>
    <InfoText>{CONTACT_PHONE_NUMBER}</InfoText>
    <InfoText>{CONTACT_EMAIL}</InfoText>
    <InfoText>{CONTACT_ADDRESS}</InfoText>
  </InfoContainer>
)
