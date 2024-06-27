import { device } from '@constants/breakpoints'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const FooterContainer = styled.footer`
  width: 100%;
  //height: auto;
  padding-top: 5vw;

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

  & p {
    color: #ffffff;
    width: 30vw;
    font-size: 1.4vw;

    line-height: 2vw;

    @media ${device.md} {
      display: none;
    }
  }

  & div {
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    gap: 1vw;

    @media ${device.md} {
      justify-content: center;
      gap: 2vw;
    }

    & img {
      width: 3vw;

      @media ${device.md} {
        width: 6vw;
      }
    }

    & h3 {
      font-size: 2vw;

      background: linear-gradient(
        90.18deg,
        #00ce2c 0.18%,
        #aedf23 49.3%,
        #a3dc00 99.88%
      );
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;

      @media ${device.md} {
        font-size: 4vw;
      }
    }
  }
`

export const FooterLinksContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 10vw;

  & h2 {
    margin-bottom: 20px;
    font-size: 1.5vw;
    color: #ffffff;

    padding-bottom: 1.5vw;
  }

  & ul {
    list-style: none;
    padding: 0;
    margin: 0;

    & li {
      margin: 2vw 0;
      font-size: 1.2vw;
    }
  }
`

export const FooterMobileLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & div {
  }
`

export const FooterLink = styled(Link)`
  color: #888;
  text-decoration: none;

  &:hover {
    color: #fff;
  }
`

export const FooterCreditsText = styled.p`
  color: #898989;
  font-size: 1vw;

  @media ${device.md} {
    font-size: 2.5vw;
    padding-top: 5vw;
  }
`
