import React, { Component } from 'react'

export class StateIncrement extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    increment(){
        this.setState((prevState) => ({
            count: prevState.count + 1
        })
        )
    }
    decrement(){
        this.setState({
            count: this.state.count - 1
        })
    }
    incerementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.incerementFive()}>Increment</button>
        <button onClick={() => this.decrement()}>Decrement</button>
      </div>
    )
  }
}

export default StateIncrement