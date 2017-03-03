import React from 'react';
import {State, Component, Actions} from 'jumpsuit';


const CounterState = State({
  initial: {value: 0},
  increment: (state, num) => ({value: state.value + num}),
  decrement: (state, num) => ({value: state.value - num}),
})

const Counter = Component({
  render() {
    return (
      <div>
        <h1>Counter value: {this.props.value}</h1>
        <button onClick={() => Actions.increment(1)}>Increment</button>
        <button onClick={() => Actions.increment(5)}>Increment 5</button>    
        <button onClick={() => setTimeout(() => Actions.increment(100), 1000)}>Increment 100</button>
        <button onClick={() => Actions.decrement(1)}>Decrement</button>
      </div>
    );
  }
}, (state) => ({
  value: state.counter.value
}));

export default Counter;
export {CounterState};