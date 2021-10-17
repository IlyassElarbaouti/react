import React, { Component } from "react";

export default class UserProfile extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (!this.props.userData) {
      return null;
    }
    return (
      <div class="user">
        <img
          alt="User Avatar"
          src={this.props.userData.avatar_url}
          class="user__avatar"
        />
        <div class="user__info">
          <span class="user__name">{this.props.userData.name}</span>
          <span class="user__location">S{this.props.userData.location}</span>
        </div>
      </div>
    );
  }
}
