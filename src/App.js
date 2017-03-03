import React from 'react';
import {Component, Router} from 'jumpsuit';
import {Route, Link} from 'react-router'
import Counter from './Counter'
import Todo from './Todo'

import logo from './logo.svg';
import './App.css';

const Header = Component({
  render() {
    return (
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>My awesome Jumpsuit playground</h2>
      </div>
    )
  }
})

const Menu = Component({
  render() {
    return (
      <nav className="navigator">
        <Link to="/counter">Counter</Link>
        <Link to="/todo">Todo</Link>
      </nav>
    )
  }
})

const Layout = Component({
  render() {
    return (
      <div className="App">
        <Header />
        <Menu />
        {this.props.children}
      </div>
    )
  }
})

const App = Component({
  render() {
    return (
      <Router>
        <Route path="/" component={Layout}>
            <Route path="/counter" component={Counter} />
            <Route path="/todo" component={Todo} />
        </Route>
      </Router>
    )
  }
})



export default App;
