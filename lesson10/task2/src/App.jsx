import React, { Component } from "react";
import Profile from "./Profile.jsx";
import ShoppingCart from "./ShoppingCart.jsx";

export default class App extends Component {
  state = {
    userName: {
      firstName: "John",
      lastName: "Doe",
    },
  };
  changeHandler = (event) => {
    const { name, value } = event.target;
    this.setState({
      userName: {
        ...this.state.userName,
        [name]: value,
      },
    });
  };

  render() {
    return (
      <div class="page">
        <h1 class="title">Hello, {this.state.userName.firstName}</h1>
        <main class="content">
          <ShoppingCart userName={this.state.userName} />

          <Profile
            changeHandler={this.changeHandler}
            userData={this.state.userName}
          />
        </main>
      </div>
    );
  }
}
