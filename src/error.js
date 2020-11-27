import { PureComponent } from 'react'

class ErrorBoundary extends PureComponent {
  state = { hasError: false }

  static propTypes = {
    children: () => null
  }

  static getDerivedStateFromError (error) {
    console.log('error getDerivedStateFromError:', error.message)
    return { hasError: true }
  }

  componentDidCatch (error, info) {
    console.log('error:', error)
    console.log('info:', info.componentStack)
  }

  render () {
    return this.props.children
  }
}

export default ErrorBoundary
