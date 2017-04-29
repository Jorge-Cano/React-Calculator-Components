import React, { Component } from 'react';
import Header from './components/Header';
import Keys from './components/Keys';
import Key from './components/Key';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>Reactor Factor Calculator!</h1>
        <div className="box">
          <Header />
          <Keys />
        </div>
      </div>
    );
  }
}

export default App;
