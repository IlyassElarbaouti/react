import React, { Component } from 'react'

export default class GoodButton extends Component {
    clickHandler(event){
        alert(event.target.textContent)
    };
    
    render() {
        return (
        <button className='fancy-button' onClick={this.clickHandler}>
            hi there!
        </button>
        )
    }
}
