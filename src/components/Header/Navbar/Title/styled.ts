import styled from 'styled-components'

export const TitleContainer = styled.div`
  width: 100%;
  height: 30vw;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3vw;

  background: linear-gradient(
    252.93deg,
    #121212 11.77%,
    rgba(36, 121, 64, 0) 91.12%
  );
`

export const TitleTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex: 1;
`

export const TitleMainText = styled.h1`
  font-size: 5vw;
  background: linear-gradient(
    90.18deg,
    #00ce2c 0.18%,
    #aedf23 49.3%,
    #a3dc00 99.88%
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`

export const TitleSubText = styled.p`
  width: 17vw;
  font-size: 1.1vw;
  color: #d9d9d9;
  text-align: center;
`

export const TitleLogoContainer = styled.div`
  flex: 0.8;
`
export const TitleLogo = styled.img`
  width: 20vw;
`
