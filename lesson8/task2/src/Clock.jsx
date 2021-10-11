import React, { Component } from "react";
import moment from "moment";

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: moment(new Date())
        .utcOffset(this.props.offset * 60)
        .format("LTS"),
    };
  }

  componentDidMount() {
    this.interval=setInterval(() => {
      this.setState({
        time: moment(new Date())
          .utcOffset(this.props.offset * 60)
          .format("LTS"),
      });
    }, 1000);
  }
  componentWillUnmount(){
      clearInterval(this.interval)
  }
  render() {
    return (
      <div className="clock">
        <div className="clock__location">{this.props.location}</div>
        <div className="clock__time">{this.state.time}</div>
      </div>
    );
  }
}
