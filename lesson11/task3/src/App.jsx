import React, { Component } from "react";
import Expand from "./Expand.jsx";


export default class App extends Component {
  state={
    isShown:false
  }
  showHandler=()=>{
this.setState({
          isShown: !this.state.isShown,
        })
      
    
  }
  render() {
    return (
      <div className="app">
        <Expand
          showHandler={this.showHandler}
          isShown={this.state.isShown}
          title="some title"
        >
          <p>
            Hooks are a new addition in React 16.8. They let you use state and
            other React features without writing a class.
          </p>
        </Expand>
      </div>
    );
  }
}
