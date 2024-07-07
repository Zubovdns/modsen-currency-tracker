import { device } from '@constants/breakpoints'
import styled from 'styled-components'

export const FormContainer = styled.div`
  width: 100%;
`

export const DateInput = styled.input`
  margin-bottom: 1vw;
  padding: 0.5vw;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.modalDataFormDateInputBorder};
  width: 100%;
  background-color: ${({ theme }) => theme.modalDataFormDateInputBackground};
  color: ${({ theme }) => theme.modalDataFormDateInputText};
  cursor: text;

  @media ${device.lg} {
    font-size: 1vw;
    padding: 0.7vw;
  }
  @media ${device.md} {
    font-size: 2vw;
    padding: 1vw;
  }
`

export const FieldContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5vw;

  @media ${device.lg} {
    margin-bottom: 1vw;
  }
  @media ${device.md} {
    margin-bottom: 1.5vw;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.5vw;

  @media ${device.lg} {
    margin-top: 0.9vw;
  }
  @media ${device.md} {
    margin-top: 1.2vw;
  }
`

export const NumberInput = styled.input`
  padding: 0.5vw;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.modalDataFormNumberInputBorder};
  width: calc(100% / 4 - 0.4vw);
  margin-right: 0.5vw;
  background-color: ${({ theme }) => theme.modalDataFormNumberInputBackground};
  color: ${({ theme }) => theme.modalDataFormNumberInputText};

  @media ${device.lg} {
    width: calc(100% / 4 - 0.6vw);
    padding: 1vw;
    margin-right: 0.7vw;
  }
  @media ${device.md} {
    width: calc(100% / 4 - 1vw);
    padding: 1.5vw;
    margin-right: 0.9vw;
  }
`

export const RemoveButton = styled.button`
  background-color: ${({ theme }) => theme.modalDataFormRemoveButtonBackground};
  color: ${({ theme }) => theme.modalDataFormRemoveButtonText};
  border: none;
  border-radius: 4px;
  padding: 0.5vw;
  cursor: pointer;

  @media ${device.lg} {
    padding: 1vw;
  }
  @media ${device.md} {
    padding: 1.5vw;
  }
`

export const AddButton = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.modalDataFormAddButtonBackground};
  color: ${({ theme }) => theme.modalDataFormAddButtonText};
  border: none;
  border-radius: 4px;
  padding: 0.5vw;
  cursor: pointer;
  margin-top: 0.7vw;

  @media ${device.lg} {
    margin-top: 1vw;
    padding: 1vw;
    font-size: 1vw;
  }
  @media ${device.md} {
    margin-top: 1.5vw;
    padding: 1.5vw;
    font-size: 3vw;
  }
`

export const SubmitButton = styled.button`
  background-color: ${({ theme }) => theme.modalDataFormSubmitButtonBackground};
  color: ${({ theme }) => theme.modalDataFormSubmitButtonText};
  border: none;
  border-radius: 4px;
  padding: 0.5vw;
  cursor: pointer;
  width: 100%;
  margin-top: 1.5vw;

  @media ${device.lg} {
    margin-top: 1vw;
    padding: 1vw;
    font-size: 1vw;
    margin-top: 2vw;
  }
  @media ${device.md} {
    margin-top: 1.5vw;
    padding: 1.5vw;
    font-size: 3vw;
    margin-top: 3vw;
  }
`

export const RandomDataButton = styled.button`
  background-color: ${({ theme }) =>
    theme.modalDataFormRandomDataButtonBackground};
  color: ${({ theme }) => theme.modalDataFormRandomDataButtonText};
  border: none;
  border-radius: 4px;
  padding: 0.5vw;
  cursor: pointer;
  width: calc(100% / 2 - 0.5vw);
  margin-right: 0.5vw;

  @media ${device.lg} {
    margin-top: 1vw;
    padding: 1vw;
    font-size: 1vw;
    margin-top: 2vw;
    margin-right: 1vw;
  }
  @media ${device.md} {
    margin-top: 1.5vw;
    padding: 1.5vw;
    font-size: 3vw;
    margin-top: 3vw;
    margin-right: 1.5vw;
  }
`

export const ClearDataButton = styled.button`
  background-color: ${({ theme }) =>
    theme.modalDataFormClearDataButtonBackground};
  color: ${({ theme }) => theme.modalDataFormClearDataButtonText};
  border: none;
  border-radius: 4px;
  padding: 0.5vw;
  cursor: pointer;
  width: calc(100% / 2);

  @media ${device.lg} {
    margin-top: 1vw;
    padding: 1vw;
    font-size: 1vw;
    margin-top: 2vw;
  }
  @media ${device.md} {
    margin-top: 1.5vw;
    padding: 1.5vw;
    font-size: 3vw;
    margin-top: 3vw;
  }
`
