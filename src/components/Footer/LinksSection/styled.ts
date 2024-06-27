import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

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
  width: 100%;
  padding-left: 17vw;
  padding-right: 17vw;

  & div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    padding: 1.2vw;
    position: relative;

    & div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #545454;
    }

    & input:checked + div img {
      transform: rotate(180deg);
    }

    & input:checked ~ ul {
      display: block;
    }

    & input {
      opacity: 0;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      cursor: pointer;
    }

    & h2 {
      font-size: 3vw;
      color: #ffffff;
    }

    & img {
      width: 3vw;
    }

    & ul {
      width: 100%;
      list-style: none;
      padding: 4vw;
      margin: 0;
      display: none;

      & li {
        margin: 2vw 0;
        font-size: 3vw;
      }
    }
  }
`

export const FooterLink = styled(Link)`
  color: #888;
  text-decoration: none;

  &:hover {
    color: #fff;
  }
`
