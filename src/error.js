import React, { PureComponent } from 'react'
import t from 'prop-types'

class ErrorBoundary extends PureComponent {
  state = { hasError: false }

  static propTypes = {
    children: t.func.isRequired
  }

  static getDerivedStateFromError () {
    return { hasError: true }
  }

  componentDidCatch (error, info) {
    console.log('error: ', error.message)
    console.log('info', info.componentStack)
  }

  render () {
    if (this.state.hasError) {
      return <h1>Deu Erro!</h1>
    }

    return this.props.children
  }
}

export default ErrorBoundary
