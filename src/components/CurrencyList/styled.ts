import styled from 'styled-components'

export const CurrencyContainer = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;

  padding-left: 10vw;
  padding-right: 10vw;

  & div {
    width: 30vw;
    height: 4vw;
    border-bottom: 1px solid #545454;
    margin-top: 4vw;

    & h3 {
      color: #d9d9d9;
      font-size: 2vw;
    }
  }
`
