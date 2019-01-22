import React, { Component } from 'react';
import './App.css';
import TimerInput from './TimerInput.js'
import Timer from './Timer.js'
import StartButton from './StartButton.js'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      time: 6,
      beep: false,
      timer: false,
      seconds: null,
      minutes: null,
      secondsRemaining: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.startCountDown = this.startCountDown.bind(this)
    this.tick = this.tick.bind(this)
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

  tick() {
    const min = Math.floor(this.state.secondsRemaining / 60)
    const sec = this.state.secondsRemaining - (min * 60)
    this.setState({
      minutes: min,
      seconds: sec
    })

    if (sec < 10) {
      this.setState({
        seconds: '0' + sec
      })
    }

    if (this.state.secondsRemaining === 0) {
      clearInterval(this.intervalHandle)
      this.beep()
    }

    this.setState({
      secondsRemaining: this.state.secondsRemaining - 1
    })
  }

  startCountDown() {
    this.intervalHandle = setInterval(this.tick, 1000)
    const time = (this.state.minutes * 60) - 1
    this.setState({
      secondsRemaining: time
    })
  }

  handleChange(event, isOn) {
    if (isOn) {
      this.setState({
        minutes: event.target.value
      })
    } else {
      this.setState({
        minutes: event.target.value
      })
    }

  }

  render() {
    const onTimeMessage = 'Input on-screen time:'
    const offTimeMessage = 'Input off-screen time:'
    return (
      <React.Fragment>
        <h1>iRest</h1>
        <TimerInput
          isOn={true}
          message={onTimeMessage}
          handleChange={this.handleChange}/>
        <TimerInput
          isOn={false}
          message={offTimeMessage}/>
        <StartButton
          startCountDown={this.startCountDown}/>
        <Timer
          minutes={this.state.minutes}
          seconds={this.state.seconds}/>
      </React.Fragment>
    );
  }
}

export default App;
