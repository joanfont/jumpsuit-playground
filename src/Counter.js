import React from 'react';
import {State, Component} from 'jumpsuit';


const CounterState = State('counter', {
  initial: {value: 0},
  increment: (state, num) => ({value: state.value + num}),
  decrement: (state, num) => ({value: state.value - num}),
})

const Counter = Component({
  render() {
    return (
      <div>
        <h1>Counter value: {this.props.value}</h1>
        <button onClick={() => CounterState.increment(1)}>Increment</button> <br /><br />
        <button onClick={() => CounterState.increment(5)}>Increment 5</button> <br /><br />  
        <button onClick={() => setTimeout(() => CounterState.increment(100), 1000)}>Async increment 100</button> <br /><br />
        <button onClick={() => CounterState.decrement(1)}>Decrement</button>
      </div>
    );
  }
}, (state) => ({
  value: state.counter.value
}));

export default Counter;
export {CounterState};