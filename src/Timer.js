import React from 'react';

const Timer = props => (
   <div>
    <h1 style={{ fontSize: 100, marginLeft:100 }}>
      {props.minutes}
      {props.seconds ? ':' : '' }{props.seconds}
    </h1>
   </div>
);

export default Timer
