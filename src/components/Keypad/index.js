import React, { Component } from "react"

class Keypad extends Component {
  render() {
    return (
      <div>
        {Array(10)
          .fill(null)
          .map((_, idx) => <button key={idx}>{idx}</button>)}
      </div>
    )
  }
}

export default Keypad
