import React, { Component } from 'react';
import Online from './Online.jsx';
import Offline from './Offline.jsx';

export default class Status extends Component {
    constructor({isOnline}){
        super({isOnline})
        this.state={
            isOnline,
        }
    }
    clickHandler=()=>{
        this.setState({
            isOnline
        })
    }
    render() {
        if(this.state.isOnline){
            return(
                <Online/>
            )
        }
        return (
            <Offline handler={this.clickHandler}/>
        )
    }
}
