import React, { Component } from 'react'

const withLogger = (WrappedComponent, name) => {
  return class extends Component {
    componentDidMount() {
      console.log(name, ' Mount oldu')
    }

    componentWillUnmount() {
      console.log(name, 'UnMount oldu')
    }
    render() {
      return <WrappedComponent {...this.props} />
    }
  }
}

export default withLogger