import React, { Component } from 'react';

class StartButton extends Component {
   render() {
     return(
      <div>
       <button onClick={(a) => this.props.startCountDown(true)}>Start</button>
     </div>
      );
  }
}

export default StartButton
