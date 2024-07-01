import { device } from '@constants/breakpoints'
import styled from 'styled-components'

export const TitleContainer = styled.div`
  width: 100%;
  height: 30vw;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3vw;

  background: ${({ theme }) => theme.titleGradientBackground};

  @media ${device.md} {
    height: 40vw;
  }
`

export const TitleTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex: 1;

  @media ${device.md} {
    align-items: center;
    justify-content: center;
  }
`

export const TitleMainText = styled.h1`
  font-size: 5vw;

  background: ${({ theme }) => theme.titleGradient};
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;

  @media ${device.md} {
    font-size: 7vw;
  }
`

export const TitleSubText = styled.p`
  width: 17vw;
  font-size: 1.2vw;
  color: ${({ theme }) => theme.titleSubText};
  text-align: center;
  margin-top: 2vw;

  @media ${device.md} {
    width: 40vw;
    line-height: 4vw;
    font-size: 2.5vw;
    margin-top: 4vw;
  }
`

export const TitleLogoContainer = styled.div`
  flex: 0.8;

  @media ${device.md} {
    display: none;
  }
`
export const TitleLogo = styled.img`
  width: 20vw;
`
