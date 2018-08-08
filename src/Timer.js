import React, { Component } from 'react';
import './Timer.css';

class Timer extends Component {

  state = {
    timer: this.props.timer || 0
  }

  setTimer = timer => this.setState({ timer })

  runTimer = () => {
    const interval = 60
    const intervalId = setInterval(() => this.setTimer(this.state.timer - interval), interval)
    this.setState({ intervalId })
  }

  stopTimer = () => clearInterval(this.state.intervalId)

  resetTimer = () => this.setState({ timer: 0 })

  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default Timer;
