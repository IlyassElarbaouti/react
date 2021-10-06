import React, { Component } from 'react';
import Online from './Online.jsx';
import Offline from './Offline.jsx';

export default class Status extends Component {
    constructor(props){
        super(props)
        this.state={
            isOnline:false,
        }
    }
    clickHandler=()=>{
        this.setState({
            isOnline:true
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
