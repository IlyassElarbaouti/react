import React, { Component } from "react";
import Clock from "./Clock.jsx";
import "./index.scss";

export default class App extends Component {
    constructor(props){
        super(props)
        this.state={
            visible:true,
        }
        this.clickHandler = this.clickHandler.bind(this)
    }
    clickHandler(){
            this.setState({
                visible:false
            })
        }
  render() {
      console.log(this.state.visible)
    return (
      <>
      { this.state.visible &&
          <>
        <Clock offset={0} location="london" />
        <Clock offset={2} location="Kyiv" />
        <Clock offset={-5} location="New York" />
        </>
      }
        <button onClick={this.clickHandler}>hide</button>


      </>
    );
  }
}
