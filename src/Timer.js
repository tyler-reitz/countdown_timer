import React, { Component } from 'react';
import { Duration } from 'luxon'
import './Timer.css';

import Keypad from './components/Keypad'
import Display from './components/Display'
import Controls from './components/Controls'

class Timer extends Component {

  state = {
    timer: Duration.fromMillis(this.props.timer || 0)
  }

  setTimer = interval => this.setState(({ timer: prevTimer }) => ({ timer: prevTimer.plus(interval) }))

  runTimer = () => {
    const interval = 60
    const intervalId = setInterval(() => {
      if (this.state.timer.toFormat('S') < 100) {
        this.stopTimer()
        this.resetTimer()
      } else {
        this.setTimer(-interval)
      }
    }, interval)
    this.setState({ intervalId })
  }

  stopTimer = () => clearInterval(this.state.intervalId)

  resetTimer = () => this.setState({ timer: Duration.fromMillis(0), intervalId: null })

  render() {
    const isRunning = this.state.intervalId

    return (
      <div className="App">
        <Controls 
          handleStart={this.runTimer}
          handleStop={this.stopTimer}
          handleReset={this.resetTimer}
          isRunning={isRunning}
        />
        <Display 
          currentTime={this.state.timer.as('milliseconds') || 0} 
          isRunning={isRunning}
        />
        {!isRunning && <Keypad handleKeypadClick={this.setTimer} />}
      </div>
    );
  }
}

export default Timer;
