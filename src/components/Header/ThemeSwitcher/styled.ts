import styled from 'styled-components'

export const ToggleSwitch = styled.div`
  display: flex;
  align-items: center;

  input[type='checkbox'] {
    display: none;
  }

  .switch {
    width: 40px;
    height: 20px;
    background-color: white;
    border-radius: 10px;
    position: relative;
    cursor: pointer;

    &::after {
      content: '';
      width: 18px;
      height: 18px;
      background-color: black;
      border-radius: 50%;
      position: absolute;
      top: 1px;
      left: 1px;
      transition: all 0.3s;
    }
  }

  input[type='checkbox']:checked + .switch::after {
    left: 21px;
  }
`
