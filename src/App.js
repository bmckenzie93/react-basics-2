import React, { Component } from 'react'
import Input from './components/Input'
import Validation from './components/Validation'
import Char from './components/Char'
import '../src/App.css'

export default class App extends Component {
  state = {
    inputValue: 'Start',
    inputLength: 5,
    charArr: null
  }

  getLengthHandler = (e) => {
    const input = e.target.value;
    const length = e.target.value.length;

    // state charArr gets filled up when i type
    const chars = e.target.value.split('');

    this.setState({
      inputValue: input,
      inputLength: length,
      charArr: chars
    })
  }

  render() {
    let characters = null;

    if(this.state.charArr) {
      characters = (
        <div>
          {this.state.charArr.map((char, index) => {
            return <Char char={char} index={index} />
          })}
        </div>
      )
    }
    return (
      <div>
        <Input 
          currentLength={this.state.inputLength} 
          getLength={this.getLengthHandler}
          value={this.state.inputValue} />

        <Validation length={this.state.inputLength} charArr={this.state.charArr} />
        
        {characters}
      </div>
    )
  }
}
