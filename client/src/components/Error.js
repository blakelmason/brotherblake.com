import React from 'react'
import { withRouter } from 'react-router-dom'

import Header from './Header'

class Error extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <>
          <Header error />
          <div className="text-center">
            <h2 className="mt-2 mb-4">Something went wrong. . . </h2>
          </div>
        </>
      )
    }

    return this.props.children
  }
}

export default withRouter(Error)
