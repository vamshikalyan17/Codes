import React, {Component} from "react";

class StateFile extends Component{
    constructor(){
        super()
        this.state = {
            message: 'This is a message',
            b: 'true'
        }
    }

    changeMessage(){
        this.state.b='true' ? 
        this.setState({
            message: 'This is a change message',
            b:'false'
        }) : 
        this.setState({
            message: 'This is a message',
            b:'true'
        })
    }

    render(){
        console.log(this.state.b)
        return(
            <div>
                <h1>{this.state.message}</h1>
                <h1>{this.state.b}</h1>
                
                <button onClick = {() =>  this.changeMessage()}>Button</button>
                {/* <button onClick={() => this.changeMessages()}>Button</button> */}
            </div>
        )
    }
}

export default StateFile