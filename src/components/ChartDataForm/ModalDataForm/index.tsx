import { ChangeEvent, Component, FormEvent } from 'react'

import {
  AddButton,
  DateInput,
  FieldContainer,
  FormContainer,
  NumberInput,
  RemoveButton,
  SubmitButton,
} from './styled'
import { Field, Props, State } from './types'

export const ModalDataForm = class ModalDataForm extends Component<
  Props,
  State
> {
  constructor(props: Props) {
    super(props)
    this.state = {
      date: '',
      fields: [],
    }
  }

  handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ date: e.target.value })
  }

  handleFieldChange = (index: number, key: keyof Field, value: string) => {
    const newFields = [...this.state.fields]
    newFields[index][key] = value
    this.setState({ fields: newFields })
  }

  addField = () => {
    this.setState((prevState) => ({
      fields: [...prevState.fields, { o: '', h: '', l: '', c: '' }],
    }))
  }

  removeField = (index: number) => {
    this.setState((prevState) => ({
      fields: prevState.fields.filter((_, i) => i !== index),
    }))
  }

  handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const { date, fields } = this.state
    const groupedData = fields.map((field, index) => ({
      x: new Date(new Date(date).setDate(new Date(date).getDate() + index))
        .toISOString()
        .split('T')[0],
      o: +field.o,
      h: +field.h,
      l: +field.l,
      c: +field.c,
      s: [+field.o, +field.c],
    }))
    console.log(groupedData)
  }

  render() {
    return (
      <FormContainer>
        <form onSubmit={this.handleSubmit}>
          <DateInput
            type="date"
            value={this.state.date}
            onChange={this.handleDateChange}
            required
          />
          {this.state.fields.map((field, index) => (
            <FieldContainer key={index}>
              <NumberInput
                type="number"
                value={field.o}
                onChange={(e) =>
                  this.handleFieldChange(index, 'o', e.target.value)
                }
                placeholder="O"
                required
              />
              <NumberInput
                type="number"
                value={field.h}
                onChange={(e) =>
                  this.handleFieldChange(index, 'h', e.target.value)
                }
                placeholder="H"
                required
              />
              <NumberInput
                type="number"
                value={field.l}
                onChange={(e) =>
                  this.handleFieldChange(index, 'l', e.target.value)
                }
                placeholder="L"
                required
              />
              <NumberInput
                type="number"
                value={field.c}
                onChange={(e) =>
                  this.handleFieldChange(index, 'c', e.target.value)
                }
                placeholder="C"
                required
              />
              <RemoveButton onClick={() => this.removeField(index)}>
                -
              </RemoveButton>
            </FieldContainer>
          ))}
          <AddButton type="button" onClick={this.addField}>
            +
          </AddButton>
          <SubmitButton type="submit">Submit</SubmitButton>
        </form>
      </FormContainer>
    )
  }
}
