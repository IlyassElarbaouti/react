import React, { Component } from "react";

export default class UserMenu extends Component {
    constructor(props){
        super(props)
    }
  render() {
    if (!this.props.userData) {
      return null;
    }
    return (
      <div class="menu">
        <span class="menu__greeting">Hello, {this.props.userData.name}</span>
        <img
          alt="User Avatar"
          src={this.props.userData.avatar_url}
          class="menu__avatar"
        />
      </div>
    );
  }
}
