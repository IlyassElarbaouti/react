import React , { Component } from 'react';

class ConnectionStatus extends Component {
  state = {
    status: 'online',
  };

  componentDidMount() {
    window.addEventListener('online', this.onToggleStatus);
    window.addEventListener('offline', this.onToggleStatus);
  }
  onToggleStatus = e => {
    this.setState({
      status: e.type,
    });
  };

  componentWillUnmount() {
    window.removeEventListener('online', this.onToggleStatus);
    window.removeEventListener('offline', this.onToggleStatus);
  }
  
  render() {
    return <div className={`status ${this.state.status === 'offline' ? 'status_offline' : ''}`}>{this.state.status}</div>;
  }
}

export default ConnectionStatus;