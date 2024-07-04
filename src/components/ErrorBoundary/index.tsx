import { Component, ErrorInfo } from 'react'

import { PageFallback } from './PageFallback'
import { Props, State } from './types'

export const ErrorBoundary = class ErrorBoundary extends Component<
  Props,
  State
> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(_: Error): State {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo)
  }

  render() {
    const { hasError } = this.state
    const { fallback = <PageFallback />, children } = this.props

    if (hasError) {
      return fallback
    }

    return children
  }
}
