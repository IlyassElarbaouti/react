import React from 'react';

class Toggler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stateBtn: 'Off',
    };
  }
  clickHandler = () => {
    this.setState({
      stateBtn: this.state.stateBtn === 'Off' ? 'On' : 'Off',
    });
  };
  render() {
    return (
      <button className="toggler" onClick={this.clickHandler}>
        {this.state.stateBtn}
      </button>
    );
  }
}

export default Toggler;
