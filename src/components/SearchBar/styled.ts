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
  background-color: #1b2028;
  padding: 1vw 1.2vw;
  border: none;
  border-radius: 4px;
  width: 20vw;
  font-size: 16px;
  color: #d9d9d9;
`

export const SuggestionsList = styled.ul`
  position: absolute;
  top: calc(5vw + 3.2vw);
  width: 20vw;
  max-height: 20vw;
  overflow-y: auto;
  background-color: #1b2028;
  color: #d9d9d9;

  list-style-type: none;
  padding: 0;
  margin: 0;
  z-index: 1;
`

export const SuggestionItem = styled.li`
  padding: 0.5vw;
  cursor: pointer;

  &:hover {
    filter: brightness(0.5);
  }
`
