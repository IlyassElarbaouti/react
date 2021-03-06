import React, { Component } from 'react'
import moment from 'moment'
import './clock.scss'

export default class Clock extends Component {
    constructor(props){
    super(props);

    const getTimeWithOffset = offset => {
    const currentTime = new Date();
    const utcOffset = currentTime.getTimezoneOffset() / 60;
    return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
    }
    this.state = {
     location:props.location,
     date: moment(getTimeWithOffset(props.offset)).format('LTS'),
    }
    setInterval(() => {
        this.setState({
                date: moment(getTimeWithOffset(props.offset)).format('LTS'),
            })
    }, 1000);
    
}
    render() {
        return (
            <div className='clock'>
                <div className="clock__location">{this.state.location}</div>
                <div className="clock__time">{this.state.date}</div>
                
            </div>
        )
    }
}
