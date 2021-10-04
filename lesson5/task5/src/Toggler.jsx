import React, { Component } from 'react'

export default class Toggler extends Component {
    toggler(e){
        e.target.textContent === 'Off'?e.target.textContent='On':e.target.textContent='Off'
    }
    render() {
        return (
            <button onClick={e=>this.toggler(e)} className='toggler'>
                Off
            </button>
        )
    }
}
