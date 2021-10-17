import React, { Component } from 'react'

export default class User extends Component {
    constructor(props){
        super(props)

    }
    render() {
        return (
            <li className="user">
                <span className='user__name'>{this.props.name}</span>
                <span className="user__age">{this.props.age}</span>
            </li>
        )
    }
}
