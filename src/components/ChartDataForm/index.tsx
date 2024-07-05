import { Component } from 'react'
import Modal from '@components/Modal'

import { ModalDataForm } from './ModalDataForm'
import { Button, Container } from './styled'
import { Props, State } from './types'

export const ChartDataForm = class ChartDataForm extends Component<
  Props,
  State
> {
  constructor(props: Props) {
    super(props)
    this.state = {
      isModalActive: false,
    }
  }

  handleModalOpen = () => {
    this.setState({
      isModalActive: true,
    })
  }
  handleModalClose = () => {
    this.setState({
      isModalActive: false,
    })
  }

  render() {
    return (
      <Container>
        <Button onClick={this.handleModalOpen}>New custom data</Button>
        {this.state.isModalActive && (
          <Modal onClose={this.handleModalClose}>
            <ModalDataForm onClose={this.handleModalClose} />
          </Modal>
        )}
      </Container>
    )
  }
}
