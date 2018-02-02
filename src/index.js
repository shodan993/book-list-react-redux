import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";

const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'RESET':
      return 0;
    default:
      return state;
  }
}

const store = createStore(counter);

const Counter = (props) => {
  return (
    <div>
      <h1>{props.value}</h1>
      <button onClick={props.onIncrement}>+</button>
      <button onClick={props.onDecrement}>-</button>
    </div>
  )
}

const render = () => {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() =>
        store.dispatch({
          type: 'INCREMENT'
        })
      }
      onDecrement={() =>
        store.dispatch({
          type: 'DECREMENT'
        })
      }
    />,
    document.getElementById('root')
  );
}

store.subscribe(() => {
  render();
});

render();
