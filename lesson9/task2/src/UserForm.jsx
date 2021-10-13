import React, { Component } from "react";

export default class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      student: "",
      occupation: "",
      about: "",
    };
  }

  handleChange = (event) => {
    const { name, value,checked,type } = event.target;
    const val = type==='checkbox'?checked:value
    this.setState({
      [name]: val,
    });
  };

  render() {
    return (
      <form className="login-form" onSubmit={()=>this.props.onSubmit(this.state)}>
        <h1 className="form-title">Profile</h1>
        <div className="form-control">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input
            onChange={this.handleChange}
            className="form-input"
            type="text"
            id="name"
            name="name"
            value={this.state.name}
          />
        </div>
        <div className="form-control">
          <label className="form-label" htmlFor="student">
            Student
          </label>
          <input
            onChange={this.handleChange}
            className="form-input"
            type="checkbox"
            id="student"
            name="student"
            value={this.state.student}
          />
        </div>
        <div className="form-control">
          <label className="form-label" id="occupation" htmlFor="occupation">
            Occupation
          </label>
          <select
            onChange={this.handleChange}
            value={this.state.occupation}
            name="occupation"
            className="form-input"
          >
            <option value="london">London</option>
            <option value="new-york">New York</option>
            <option value="coconut">Sidney</option>
            <option value="mango">Berlin</option>
          </select>
        </div>
        <div className="form-control">
          <label className="form-label" id="about" htmlFor="about">
            About
          </label>
          <textarea
            onChange={this.handleChange}
            name="about"
            value={this.state.about}
            className="form-input"
          />
        </div>
        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    );
  }
}
