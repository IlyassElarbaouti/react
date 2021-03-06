import React , { Component }  from 'react';

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }
  setColor = color => {
    this.setState({
      title: color,
    });
  };
  clearColor = () => {
    this.setState({
      title: '',
    });
  };
  render() {
    return (
      <div>

        <div className="picker__title">{this.state.title}</div>

        <div>
          <button
            className="picker__button picker__button_coral"
            onMouseEnter={() => this.setColor('Coral')}
            onMouseLeave={() => this.clearColor()}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            onMouseEnter={() => this.setColor('Aqua')}
            onMouseLeave={() => this.clearColor()}
          ></button>
          <button
            className="picker__button picker__button_bisque"
            onMouseEnter={() => this.setColor('Bisque')}
            onMouseLeave={() => this.clearColor()}
          ></button>
        </div>

      </div>
    );
  }
}

export default ColorPicker;
