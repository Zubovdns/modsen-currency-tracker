import styled from 'styled-components'

export const FormContainer = styled.div`
  width: 100%;
  color: #000;
`

export const DateInput = styled.input`
  margin-bottom: 1vw;
  padding: 0.5vw;
  border-radius: 4px;
  border: 1px solid #474747;
  width: 100%;
  background-color: #1c1c1d;
  color: #fff;
  cursor: text;
`

export const FieldContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5vw;
`

export const NumberInput = styled.input`
  padding: 0.5vw;
  border-radius: 4px;
  border: 1px solid #474747;
  width: calc(100% / 4 - 0.4vw);
  margin-right: 0.5vw;
  background-color: #1c1c1d;
  color: #fff;
`

export const RemoveButton = styled.button`
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5vw;
  cursor: pointer;
`

export const AddButton = styled.button`
  width: 100%;
  background-color: #474747;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5vw;
  cursor: pointer;
  margin-top: 0.7vw;
`

export const SubmitButton = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5vw;
  cursor: pointer;
  width: 100%;
  margin-top: 1.5vw;
`
