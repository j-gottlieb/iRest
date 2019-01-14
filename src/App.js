import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      time: 6,
      beep: false,
      timer: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.toggleOn = this.toggleOn.bind(this)
    this.toggleOff = this.toggleOff.bind(this)
  }

  beep() {
    const audioCtx = new AudioContext()
    const osc = audioCtx.createOscillator()
    osc.type = 'sine'
    osc.frequency.value = 440
    osc.connect(audioCtx.destination)
    osc.start()
    osc.stop(.5)
    alert('Take 5!')
  }

  componentDidMount() {
    console.log(this.state.timer)
    if (this.state.timer) {
      const time = 1000 * this.state.time
      setInterval(() => { this.beep() }, time)
    }
  }

  toggleOn() {
    this.setState({ timer: true })
    console.log(this.state)
  }

  toggleOff() {
    this.setState({ timer: false })
    console.log(this.state)
  }

  handleChange(event) {
    const num = parseInt(10, event.target.value)
    this.setState({time: num})
  }

  render() {
    return (
      <React.Fragment>
        <h1>iRest</h1>
        <input type='number' name='time' value={this.state.time} onChange={this.handleChange}></input>
        <button onClick={this.toggleOn}>Start Timer</button>
        <button onClick={this.toggleOff}>Stop Timer</button>
      </React.Fragment>
    );
  }
}

export default App;
