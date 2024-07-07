import { Component } from 'react'
import { createContainer, Portal } from '@components/Portal'

import { NOTIFICATION_CONTAINER_ID } from './constants'
import { NotificationContainer, NotificationMessage } from './styled'
import { Props, State } from './types'

export const Notification = class Notification extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      isMounted: false,
      isFadeOut: false,
    }
  }

  componentDidMount(): void {
    createContainer({ id: NOTIFICATION_CONTAINER_ID })
    this.setState({
      isMounted: true,
    })

    setTimeout(() => {
      this.setState({ isFadeOut: true })
      setTimeout(() => {
        this.props.onClose()
      }, 500)
    }, 3000)
  }

  render() {
    if (!this.state.isMounted) return null
    return (
      <Portal id={NOTIFICATION_CONTAINER_ID}>
        <NotificationContainer $isFadeOut={this.state.isFadeOut}>
          <NotificationMessage>{this.props.message}</NotificationMessage>
        </NotificationContainer>
      </Portal>
    )
  }
}
