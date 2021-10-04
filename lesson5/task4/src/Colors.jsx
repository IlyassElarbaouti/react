import React, { Component } from 'react'
    const RED = '#f00';
    const GREEN = '#0f0';
    const BLUE = '#00f';

export default class Colors extends Component {
    constructor(props){
        super(props)

    }
    setBodyColor(color){
        document.body.style.backgroundColor = color
    }
    render() {
        return (
            <>
            <button onClick={()=>this.setBodyColor(RED)} className='colors__button' style={{backgroundColor:RED}}></button>
            <button onClick={()=>this.setBodyColor(GREEN)} className='colors__button' style={{backgroundColor:GREEN}}></button>
            <button onClick={()=>this.setBodyColor(BLUE)} className='colors__button' style={{backgroundColor:BLUE}}></button>
            </>
        )
    }
}

