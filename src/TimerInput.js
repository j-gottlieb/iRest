import React from 'react';

const TimerInput = props => (
   <div>
      <h3>{props.message}</h3>
      <input
        type="number"
        onChange={(e) => props.handleChange(e, props.isOn)}
        required
        defaultValue={props.minutes}/>
  </div>
);

export default TimerInput
