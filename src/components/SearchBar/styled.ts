import { device } from '@constants/breakpoints'
import styled from 'styled-components'

export const SearchContainer = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.5vw;
  padding: 5vw;
`

export const SearchInput = styled.input`
  background-color: ${({ theme }) => theme.searchInputBackground};
  padding: 1vw 1.2vw;
  border: none;
  border-radius: 4px;
  width: 20vw;
  font-size: 1vw;
  color: ${({ theme }) => theme.searchInputText};

  @media ${device.lg} {
    width: 30vw;
    padding: 2vw 2.4vw;
    font-size: 2vw;
  }
  @media ${device.md} {
    width: 60vw;
    padding: 3.5vw 4.8vw;
    font-size: 3vw;
  }
`

export const SuggestionsList = styled.ul`
  position: absolute;
  top: 8.2vw;
  width: 20vw;
  max-height: 20vw;
  overflow-y: auto;
  font-size: 1vw;
  background-color: ${({ theme }) => theme.searchListBackground};
  color: ${({ theme }) => theme.searchListText};

  list-style-type: none;
  padding: 0;
  margin: 0;
  z-index: 1;

  @media ${device.lg} {
    top: 11.3vw;
    width: 30vw;
    font-size: 2vw;
    max-height: 30vw;
  }
  @media ${device.md} {
    width: 60vw;
    top: 15.3vw;
    font-size: 3vw;
    max-height: 40vw;
  }
`

export const SuggestionItem = styled.li`
  padding: 0.5vw;
  cursor: pointer;

  &:hover {
    filter: brightness(0.5);
  }

  @media ${device.lg} {
    padding: 1vw;
  }
  @media ${device.md} {
    padding: 1.5vw;
  }
`
