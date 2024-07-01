import { device } from '@constants/breakpoints'
import styled from 'styled-components'

export const FooterContainer = styled.footer`
  width: 100%;
  padding-top: 5vw;
  padding-bottom: 3vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const FooterMainContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  gap: 10vw;

  @media ${device.md} {
    flex-direction: column;
    align-items: center;
    gap: 3vw;
  }
`

export const FooterTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  gap: 1.5vw;

  @media ${device.md} {
    align-items: center;
    justify-content: center;
  }
`

export const FooterTitleContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 1vw;

  @media ${device.md} {
    justify-content: center;
    gap: 2vw;
  }
`

export const FooterTitleImage = styled.img`
  width: 3vw;

  @media ${device.md} {
    width: 6vw;
  }
`

export const FooterTitle = styled.h3`
  font-size: 2vw;

  background: ${({ theme }) => theme.titleGradient};
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;

  @media ${device.md} {
    font-size: 4vw;
  }
`

export const FooterSubText = styled.p`
  color: ${({ theme }) => theme.footerSubTextColor};
  width: 30vw;
  font-size: 1.4vw;

  line-height: 2vw;

  @media ${device.md} {
    display: none;
  }
`

export const FooterCreditsText = styled.p`
  color: ${({ theme }) => theme.footerCreditsColor};
  font-size: 1vw;

  @media ${device.md} {
    font-size: 2.5vw;
    padding-top: 5vw;
  }
`
