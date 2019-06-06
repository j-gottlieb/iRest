import React from 'react';

const Button = props => (
  <div>
     <button onClick={(a) => props.action(true)}>{props.label}</button>
  </div>
);

export default Button
