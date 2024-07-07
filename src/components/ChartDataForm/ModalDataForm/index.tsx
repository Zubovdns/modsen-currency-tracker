import { ChangeEvent, Component, FormEvent } from 'react'
import { v4 as uuidv4 } from 'uuid'

import {
  AddButton,
  ButtonContainer,
  ClearDataButton,
  DateInput,
  FieldContainer,
  FormContainer,
  NumberInput,
  RandomDataButton,
  RemoveButton,
  SubmitButton,
} from './styled'
import { connector, Field, Props, State } from './types'

class ModalDataFormClass extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      date: '',
      fields: [],
      errors: [],
    }
  }

  handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ date: e.target.value })
  }

  handleFieldChange = (id: string, key: keyof Field, value: string) => {
    const newFields = this.state.fields.map((field) =>
      field.id === id ? { ...field, [key]: value } : field
    )
    this.setState({ fields: newFields })
  }

  addField = () => {
    this.setState((prevState) => ({
      fields: [
        ...prevState.fields,
        { id: uuidv4(), o: '', h: '', l: '', c: '' },
      ],
      errors: [
        ...prevState.errors,
        { id: uuidv4(), o: false, h: false, l: false, c: false },
      ],
    }))
  }

  removeField = (id: string) => {
    this.setState((prevState) => ({
      fields: prevState.fields.filter((field) => field.id !== id),
      errors: prevState.errors.filter((error) => error.id !== id),
    }))
  }

  validateFields = () => {
    const errors = this.state.fields.map((field) => {
      const o = parseFloat(field.o)
      const h = parseFloat(field.h)
      const l = parseFloat(field.l)
      const c = parseFloat(field.c)
      return {
        id: field.id,
        o: false,
        h: h < Math.max(o, l, c),
        l: l > Math.min(o, h, c),
        c: false,
      }
    })
    this.setState({ errors })
    return !errors.some((error) =>
      Object.values(error).some((isError) => isError)
    )
  }

  handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!this.validateFields()) return
    const { date, fields } = this.state
    const { setUserChartData, onClose } = this.props
    const groupedData = fields.map(
      (field, index) =>
        ({
          x: new Date(
            new Date(date).setDate(new Date(date).getDate() + index)
          ).setHours(0, 0, 0, 0),
          o: +field.o,
          h: +field.h,
          l: +field.l,
          c: +field.c,
          s: [+field.o, +field.c],
        } as unknown as number | [number, number] | null)
    )

    setUserChartData(groupedData)
    onClose()
  }

  handleRandom = (e: FormEvent) => {
    e.preventDefault()
    const { setRandomChartData, onClose } = this.props
    setRandomChartData()
    onClose()
  }

  handleClear = (e: FormEvent) => {
    e.preventDefault()
    const { clearChartData, onClose } = this.props
    clearChartData()
    onClose()
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
          {this.state.fields.map((field) => (
            <FieldContainer key={field.id}>
              <NumberInput
                type="number"
                value={field.o}
                onChange={(e) =>
                  this.handleFieldChange(field.id, 'o', e.target.value)
                }
                placeholder="Open"
                required
              />
              <NumberInput
                type="number"
                value={field.h}
                $hasError={
                  this.state.errors.find((error) => error.id === field.id)?.h
                }
                onChange={(e) =>
                  this.handleFieldChange(field.id, 'h', e.target.value)
                }
                placeholder="Hightest"
                required
              />
              <NumberInput
                type="number"
                value={field.l}
                $hasError={
                  this.state.errors.find((error) => error.id === field.id)?.l
                }
                onChange={(e) =>
                  this.handleFieldChange(field.id, 'l', e.target.value)
                }
                placeholder="Lowest"
                required
              />
              <NumberInput
                type="number"
                value={field.c}
                onChange={(e) =>
                  this.handleFieldChange(field.id, 'c', e.target.value)
                }
                placeholder="Close"
                required
              />
              <RemoveButton onClick={() => this.removeField(field.id)}>
                -
              </RemoveButton>
            </FieldContainer>
          ))}
          <AddButton type="button" onClick={this.addField}>
            +
          </AddButton>
          <SubmitButton type="submit">Submit</SubmitButton>
        </form>
        <ButtonContainer>
          <RandomDataButton onClick={this.handleRandom}>
            Random
          </RandomDataButton>
          <ClearDataButton onClick={this.handleClear}>Clear</ClearDataButton>
        </ButtonContainer>
      </FormContainer>
    )
  }
}

export const ModalDataForm = connector(ModalDataFormClass)
