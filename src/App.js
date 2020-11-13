import React, { Component } from 'react'
import Input from './components/Input'
import Validation from './components/Validation'
import '../src/App.css'

export default class App extends Component {
  state = {
    inputValue: 'Start',
    inputLength: 5
  }

  getLengthHandler = (e) => {
    const input = e.target.value;
    const length = e.target.value.length;

    this.setState({
      inputValue: input,
      inputLength: length
    })
  } 

  render() {
    return (
      <div>
        <Input 
          currentLength={this.state.inputLength} 
          getLength={this.getLengthHandler}
          value={this.state.inputValue} />
          
        <Validation length={this.state.inputLength} />
      </div>
    )
  }
}
