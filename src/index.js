import React from 'react';
import {Render, Rerender} from 'jumpsuit';
import App from './App';

import {CounterState as Counter} from './Counter'
import {TodoState as Todo} from './Todo'

import './index.css';

if (module.hot) {
  module.hot.accept('./App', Rerender)
}

const globalState = {counter: Counter, todo: Todo};

Render(globalState, <App />);