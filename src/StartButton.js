import React, { Component } from 'react';

class StartButton extends Component {
   render() {
     return(
      <div>
       <button onClick={this.props.startCountDown}>Start</button>
     </div>
      );
  }
}

export default StartButton
