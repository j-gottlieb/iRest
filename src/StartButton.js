import React, { Component } from 'react';

class Button extends Component {
   render() {
     return(
      <div>
       <button onClick={(a) => this.props.action(true)}>{this.props.label}</button>
     </div>
      );
  }
}

export default Button
