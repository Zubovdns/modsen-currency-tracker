import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  display: flex;
  padding: 0 20vw;
`

export const Button = styled.button`
  background-color: #5ad539;
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #4caf50;
  }
`
