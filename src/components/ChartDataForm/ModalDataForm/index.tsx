import { ChangeEvent, Component, FormEvent } from 'react'

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

  handleFieldChange = (index: number, key: keyof Field, value: string) => {
    const newFields = [...this.state.fields]
    newFields[index][key] = value
    this.setState({ fields: newFields })
  }

  addField = () => {
    this.setState((prevState) => ({
      fields: [...prevState.fields, { o: '', h: '', l: '', c: '' }],
      errors: [...prevState.errors, { o: false, h: false, l: false, c: false }],
    }))
  }

  removeField = (index: number) => {
    this.setState((prevState) => ({
      fields: prevState.fields.filter((_, i) => i !== index),
      errors: prevState.errors.filter((_, i) => i !== index),
    }))
  }

  validateFields = () => {
    const errors = this.state.fields.map((field) => {
      const o = parseFloat(field.o)
      const h = parseFloat(field.h)
      const l = parseFloat(field.l)
      const c = parseFloat(field.c)
      return {
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
          {this.state.fields.map((field, index) => (
            <FieldContainer key={index}>
              <NumberInput
                type="number"
                value={field.o}
                onChange={(e) =>
                  this.handleFieldChange(index, 'o', e.target.value)
                }
                placeholder="Open"
                required
              />
              <NumberInput
                type="number"
                value={field.h}
                $hasError={this.state.errors[index]?.h}
                onChange={(e) =>
                  this.handleFieldChange(index, 'h', e.target.value)
                }
                placeholder="Hightest"
                required
              />
              <NumberInput
                type="number"
                value={field.l}
                $hasError={this.state.errors[index]?.l}
                onChange={(e) =>
                  this.handleFieldChange(index, 'l', e.target.value)
                }
                placeholder="Lowest"
                required
              />
              <NumberInput
                type="number"
                value={field.c}
                onChange={(e) =>
                  this.handleFieldChange(index, 'c', e.target.value)
                }
                placeholder="Close"
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
