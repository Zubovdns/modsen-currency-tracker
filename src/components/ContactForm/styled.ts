import { device } from '@constants/breakpoints'
import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 40vw;
  margin: 5vw auto;

  @media ${device.lg} {
    max-width: 50vw;
  }
  @media ${device.md} {
    max-width: 65vw;
  }
`

export const Input = styled.input`
  margin-bottom: 15px;
  padding: 10px;
  font-size: 16px;
  background-color: ${({ theme }) => theme.contactFormInputBackground};
  border: none;
  border-radius: 1vw;
  color: ${({ theme }) => theme.contactFormInputText};
`

export const TextArea = styled.textarea`
  margin-bottom: 15px;
  padding: 10px;
  font-size: 16px;
  resize: vertical;
  background-color: ${({ theme }) => theme.contactFormInputBackground};
  border: none;
  border-radius: 1vw;
  color: ${({ theme }) => theme.contactFormInputText};
`

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: ${({ theme }) => theme.contactFormButtonBackground};
  color: ${({ theme }) => theme.contactFormButtonText};
  border: none;
  cursor: pointer;
  border-radius: 1vw;

  &:hover {
    background-color: ${({ theme }) => theme.contactFormButtonBackgroundHover};
  }
`
