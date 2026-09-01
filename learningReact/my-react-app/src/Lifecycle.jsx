import React from 'react'

class Lifecycle extends React.Component {
  // Runs before component is mounted
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      data: null
    }
  }

  // Updates state based on props changes
  static getDerivedStateFromProps(props, state) {
    if (props.initialCount !== state.count) {
      return { count: props.initialCount }
    }
    return null
  }

  // Runs after component is mounted
  componentDidMount() {
    console.log('Component mounted')
    // Fetch data, set timers, etc.
    this.setState({ data: 'Mounted data' })
  }

  // Runs before component updates
  shouldComponentUpdate(nextProps, nextState) {
    console.log('Should update?', nextProps, nextState)
    return true
  }

  // Runs before component updates
  componentWillUpdate(nextProps, nextState) {
    console.log('Component will update')
  }

  // Runs after component updates
  componentDidUpdate(prevProps, prevState) {
    console.log('Component updated')
  }

  // Runs before component unmounts
  componentWillUnmount() {
    console.log('Component will unmount')
    // Cleanup timers, listeners, etc.
  }

  // Handles errors in lifecycle
  componentDidCatch(error, errorInfo) {
    console.log('Error caught:', error, errorInfo)
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    return (
      <div>
        <h1>Lifecycle Methods Example</h1>
        <p>Count: {this.state.count}</p>
        <p>Data: {this.state.data}</p>
        <button onClick={this.handleIncrement}>Increment</button>
      </div>
    )
  }
}

export default Lifecycle