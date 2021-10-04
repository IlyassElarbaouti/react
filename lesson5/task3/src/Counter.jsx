import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props){
        super(props)
        this.state={
            counter:0
        }
        this.decrement = this.decrement.bind(this);
        this.increase = this.increase.bind(this);
    }
    decrement(){
        this.setState({
            counter: this.state.counter -1
        })
    }
    increase(){
        this.setState({
            counter: this.state.counter +1
        })
    }
    reset(){
        this.setState({
            counter: 0,
        })
    }
    render() {
        return (
            <div className="counter">
                 <button onClick={this.decrement}  className="counter__button">-</button>
                 <span onClick={()=>{this.reset()}} className="counter__value">{this.state.counter}</span>
                 <button onClick={this.increase} className="counter__button">+</button>
            </div>
        )
    }
}
