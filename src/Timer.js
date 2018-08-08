import React, { Component } from 'react';
import './Timer.css';

import Keypad from './components/Keypad'
import Display from './components/Display'

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
        <Display currentTime={1111111} />
        <Keypad />
      </div>
    );
  }
}

export default Timer;
