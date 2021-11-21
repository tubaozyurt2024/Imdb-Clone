import React, { Component } from 'react'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hasError: false
    }
  }

  static getDerivedStateFromError(error) {
    /*
      Component ağacında bir hata meydana gelirse;
      'hasError' property'sinin değerini güncelleyelim.
    */

    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return <div>Maalesef bir hata oluştu.</div>
    }

    return this.props.children
  }
}

export default ErrorBoundary