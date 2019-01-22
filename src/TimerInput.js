import React, { Component } from 'react';

class TimerInput extends Component {
render() {
  return (
   <div>
      <h3>{this.props.message}</h3>
      <input
        type="number"
        onChange={(e) => this.props.handleChange(e, this.props.isOn)}
        required />
  </div>
     );
   }
}

export default TimerInput
