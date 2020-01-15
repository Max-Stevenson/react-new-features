import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

const App = (props) => {
  const [count, setCount] = useState(props.count);
  const [text, setText] = useState('test');

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(props.count);
  };

  return (
    <div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>reset</button>
      <p>{text || 'count'} is: {count}</p>
      <input value={text} onChange={(e) => setText(e.target.value)}></input>
    </div>
  )
}

App.defaultProps = {
  count: 0
};

ReactDOM.render(<App count={5} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
