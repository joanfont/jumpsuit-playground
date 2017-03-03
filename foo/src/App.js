import React from 'react';
import {Component} from 'jumpsuit';
import Counter from './Counter'
import Todo from './Todo'

import logo from './logo.svg';
import './App.css';

const App = Component({
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Counter />
        <Todo />
      </div>
    );
  }
});

export default App;
