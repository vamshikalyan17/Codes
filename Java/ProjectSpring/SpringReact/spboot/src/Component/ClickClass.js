import React, { Component } from 'react'

export class ClickClass extends Component {
    classClick(){
        console.log("class clicked")
    }
  render() {
    return (
      <div>
        <button onClick={this.classClick}>Class Click</button>
      </div>
    )
  }
}

export default ClickClass