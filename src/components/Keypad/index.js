import React, { Component } from "react"

class Keypad extends Component {

  handleSelect = (evt) => this.setState({ unit: evt.target.value })

  render() {
    return (
      <div>
        <label for="timer-units">Units: </label>
        <select onChange={this.handleSelect} id="timer-units" name="timer-units">
          {['hours','minutes','seconds'].map(unit => 
            <option key={unit} value={unit}>{unit}</option>
          )}
        </select>

        {Array(10)
          .fill(null)
          .map((_, idx) => <button key={idx}>{idx}</button>)}
      </div>
    )
  }
}

export default Keypad
