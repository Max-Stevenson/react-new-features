import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

const App = () => {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
    <button onClick={increment}>+1</button>
      <p>Count is: {count}</p>
    </div>
  )
}

ReactDOM.render(<App></App>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
