import React from 'react';
import {State, Component} from 'jumpsuit';

const TodoState = State('todo', {
  initial: {
    list: [],
    value: '',
  },

  add: (state, todo) => ({
    ...state,
    list: state.list.concat([{...todo, text: state.value}])
  }),

  updateValue: (state, event) => ({...state, value: event.target.value}),

  toggleDone: (state, index) => {
    const newList = state.list.concat();
    newList[index].done = !newList[index].done;
    return {...state, list: newList};
  },

  clear: (state) => ({
    ...state,
    list: []
  })
})

const Todo = Component({
  render() {
    return (
      <div>
        <h1>Todo</h1>
        <ul>
            { this.props.list.map((e, idx) => (
              <li key={idx}>
                <input 
                  type="checkbox" 
                  onChange={() => TodoState.toggleDone(idx)} 
                  checked={e.done && "checked"} 
                />
                {e.text}
              </li>
            )) }
        </ul>
        <input type="text" id="text" onChange={TodoState.updateValue}/>
        <button onClick={this.handleAdd} value={this.props.value}>Add</button>
      </div>
    );
  },
  handleAdd: (e) => {
    TodoState.add({
      done: true
    })
  }
}, (state) => ({
  list: state.todo.list,
  value: state.todo.value
}));

export default Todo;
export {TodoState};