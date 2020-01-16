import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

const NoteApp = () => {

  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');

  return (
    <div>
      <h1>Notes</h1>
      <p>Add Note</p>
      <p>{title}</p>
      <form>
        <input value={title} onChange={(e) => {setTitle(e.target.value)}}></input>
      </form>
    </div>
  )
}

NoteApp.defaultProps = {
};

ReactDOM.render(<NoteApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
