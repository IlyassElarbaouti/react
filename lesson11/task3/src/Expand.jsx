import React, { Component } from "react";

export default class Expand extends Component {
  state = {
    isShown: false,
  };
  showHandler = () => {
    this.setState({
      isShown: !this.state.isShown,
    });
  };
  render() {
    const { children, title } = this.props;
    const { isShown } = this.state;
    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{title}</span>
          <button onClick={this.showHandler} className="expand__toggle-btn">
            <i
              className={isShown ? "fas fa-chevron-up" : "fas fa-chevron-down"}
            ></i>
          </button>
        </div>
        {isShown && <div className="expand__content">{children}</div>}
      </div>
    );
  }
}
