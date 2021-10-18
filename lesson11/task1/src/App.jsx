import React, { Component } from "react";
import Numbers from "./Numbers.jsx";
import EvenNumbers from "./EvenNumbers.jsx";
import OddNumbers from "./OddNumbers.jsx";

export default class App extends Component {
  state={
    number:0
  }
  componentDidMount(){
    setInterval(() => {
      this.setState({
        number:this.state.number+1
      })
    }, 1000);
  }
  render() {
    return (
      <>
        <OddNumbers number={this.state.number} />
        <EvenNumbers number={this.state.number} />
        <Numbers title="All numbers" number={this.state.number} />
        <Numbers title="Just 17" number={17} />
      </>
    );
      
    
  }
}
