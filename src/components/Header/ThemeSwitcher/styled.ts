import styled from 'styled-components'

export const TSInput = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`

export const TSLabel = styled.label`
  width: 40px;
  height: 20px;
  background-color: ${({ theme }) => theme.togglerBackground};
  border-radius: 10px;
  position: relative;
  cursor: pointer;

  &::after {
    content: '';
    width: 18px;
    height: 18px;
    background-color: ${({ theme }) => theme.togglerColor};
    border-radius: 50%;
    position: absolute;
    top: 1px;
    left: 1px;
    transition: all 0.3s;
  }
`

export const ToggleSwitch = styled.div`
  display: flex;
  align-items: center;

  ${TSInput}:checked + ${TSLabel}::after {
    left: 21px;
  }
`
