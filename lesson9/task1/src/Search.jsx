import React, { Component } from "react";

export default class Search extends Component {
    state={
        value: ''
    }
    change=event=>{
        this.setState({
            value:event.target.value
        })
        // console.log(this.state.value)
    }
    click=event=>{
        event.preventDefault();
        alert(`Search text: ${this.state.value}`)
    }
  render() {
    return (
      <form onSubmit={this.click} className="search">
        <input onChange={this.change} value={this.state.value} type="text" className="search__input" />
        <button type='submit' className="search__button">Search</button>
      </form>
    );
  }
}
