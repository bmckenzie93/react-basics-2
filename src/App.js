import React, { Component } from 'react';
import './App.css';
import Validation from './components/Validation/Validation'
import Char from './components/Char/Char'



export default class App extends Component {
  state = {
    userInput: ''
  }

  changeHandler = (e) => {
    this.setState({userInput: e.target.value});
  }

  deleteHandler = ( index ) => {
    const currentText = this.state.userInput.split('');
    currentText.splice(index, 1);
    const updatedText = currentText.join('');

    this.setState({userInput: updatedText});
  }


  render() {
    const charList = this.state.userInput.split('').map((char, index) => {
      return <Char 
      char={char} 
      index={index} 
      key={index}
      delClick={() => this.deleteHandler(index)} />
    })

    return (
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
        <input className="input" 
        type="text" 
        onChange={this.changeHandler}
        value={this.state.userInput} />

        <p style={{fontSize:'1.5rem'}}>{this.state.userInput}</p>

        <Validation textLength={this.state.userInput.length} />

        <div>{charList}</div>
      </div>
    );
  }
}



