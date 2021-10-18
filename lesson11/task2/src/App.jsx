import React, { Component } from "react";
import Dialogue from "./Dialog.jsx";

export default class App extends Component {
  state = {
    isOpen: true,
  };
  showHandler=()=>{
    this.setState({
      isOpen:true
    })
  }
  closeHandler=()=>{
    this.setState({
      isOpen:false
    })
  }
  render() {
    return (
      <div className="app">
        <button onClick={this.showHandler} className="btn">
          Show dialog
        </button>
        <Dialogue
          title="recommendations"
          onClose={this.closeHandler}
          isOpen={this.state.isOpen}
        >
          <p>
            Use immutable array methods to work with data. It will help to avoid
            bugs
          </p>
        </Dialogue>
      </div>
    );
  }
}
