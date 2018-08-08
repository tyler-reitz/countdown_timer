import React, { Component } from 'react';
import './Timer.css';

import Keypad from './components/Keypad'
import Display from './components/Display'
import Controls from './components/Controls'

class Timer extends Component {

  state = {
    timer: this.props.timer || 0
  }

  setTimer = interval => this.setState(({ timer: prevTimer }) => ({ timer: prevTimer + interval }))

  runTimer = () => {
    const interval = -60
    const intervalId = setInterval(() => this.setTimer(interval), interval)
    this.setState({ intervalId })
  }

  stopTimer = () => clearInterval(this.state.intervalId)

  resetTimer = () => this.setState({ timer: 0 })

  render() {
    return (
      <div className="App">
        <Controls 
          handleStart={this.runTimer}
          handleStop={this.stopTimer}
          handleReset={this.resetTimer}
        />
        <Display currentTime={this.state.timer} />
        <Keypad />
      </div>
    );
  }
}

export default Timer;
