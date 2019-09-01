import React from 'react'
import propTypes from 'prop-types'

export default class DefaultErrorBoundary extends React.Component {
  state = {
    isError: false
  }

  static getDerivedStateFromError() {
    return { isError: true }
  }

  static propTypes = {
    children: propTypes.node.isRequired
  }

  render() {
    const { isError } = this.state

    return isError ? <div>Something went wrong</div> : this.props.children
  }
}
