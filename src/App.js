import React, { Component } from 'react';
import './App.css';
import TimerInput from './TimerInput.js'
import Timer from './Timer.js'
import Button from './StartButton.js'

class App extends Component {
  state = {
      seconds: null,
      minutes: null,
      minutesOn: 20,
      minutesOff: 2,
      isCounting: false,
      secondsRemaining: '',
      volume: .5
  }

  beep = () => {
    const audio = new Audio('notification.mp3')
    audio.volume = this.state.volume
    audio.play()
  }

  tick = () => {
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
      this.setState({isCounting: false}, () => {
        this.startCountDown(this.state.on)
      })
    }
    this.setState({
      secondsRemaining: this.state.secondsRemaining - 1
    })
  }

  startCountDown = on => {
    if (!this.state.isCounting) {
      this.intervalHandle = setInterval(this.tick, 1000)
      let time
      let isOn
      if (on) {
        time = (this.state.minutesOn * 60) - 1
        isOn = false
      } else {
        time = (this.state.minutesOff * 60) - 1
        isOn = true
      }
      this.setState({
        secondsRemaining: time,
        on: isOn,
        isCounting: true
      })
    }
  }

  stopCountDown = () => {
    clearInterval(this.intervalHandle)
    this.setState({
      isCounting: false,
      minutes: null,
      seconds: null
    })
  }

  handleChange = ({target: {value}}, isOn) => {
    if (isOn) {
      this.setState({
        minutesOn: value
      })
    } else {
      this.setState({
        minutesOff: value
      })
    }
  }

  setVolume = ({target: {value}}) => {
    this.setState({volume: value})
  }

  render() {
    const onTimeMessage = 'Input on-screen time:'
    const offTimeMessage = 'Input off-screen time:'
    const startLabel = 'Start'
    const stopLabel = 'Stop'
    return (
      <React.Fragment>
        <h1>iRest</h1>
        <TimerInput
          isOn={true}
          message={onTimeMessage}
          minutes={this.state.minutesOn}
          handleChange={this.handleChange}
        />
        <TimerInput
          isOn={false}
          message={offTimeMessage}
          minutes={this.state.minutesOff}
          handleChange={this.handleChange}
        />
        <Button
          action={this.startCountDown}
          label={startLabel}
        />
        <Button
          action={this.stopCountDown}
          label={stopLabel}
        />
        <Timer
          minutes={this.state.minutes}
          seconds={this.state.seconds}
        />
        <label>Volume</label>
        <input
          type="range"
          min="0" max="1"
          value={this.state.volume}
          onChange={this.setVolume}
          step=".01"
        />
      </React.Fragment>
    );
  }
}

export default App;
