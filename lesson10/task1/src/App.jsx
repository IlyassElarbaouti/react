import React, { Component } from "react";
import UserMenu from "./UserMenu.jsx";
import UserProfile from "./UserProfile.jsx";

export default class App extends Component {
  state = {
    userData: null,
  };
  componentDidMount(){
    this.getData(this.props.userId)
  }
  getData = (userId) => {
    const baseUrl = `https://api.github.com/users/${userId}`;
    fetch(baseUrl)
      .then((data) => data.json())
      .then((userData) =>
        this.setState({
          userData,
        })
      
        
      );
  };
  render() {
    return (
      <div class="page">
        <header class="header">
          <UserMenu userData={this.state.userData}/>
        </header>
        <UserProfile userData={this.state.userData}/>
      </div>
    );
  }
}
