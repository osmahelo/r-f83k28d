import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.Incrementa = this.Incrementa.bind(this);

    this.state ={
      counter: 0
    }

  }
  render() {
    return (
      <div>
        <span className="value">{this.state.counter}</span>
        <button id="inc" onClick={this.Incrementa}>Incrementa</button>
      </div>
    );
  }
  Incrementa(){
    this.setState({
      counter: this.state.counter +1
    })

  }
}

export default App;
