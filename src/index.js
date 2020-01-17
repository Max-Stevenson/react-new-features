import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

const NoteApp = () => {

  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');

  const addNote = (event) => {
    event.preventDefault();
    setNotes([
      ...notes,
      { title }
    ]);
    setTitle('');
  };

  const removeNote = (title) => {
    setNotes(notes.filter((note) => note.title !== title));
  };

  return (
    <div>
      <h1>Notes</h1>
      {notes.map((note) => (
        <div key={note.title}>
          <h3>{note.title}</h3>
          <button onClick={() => removeNote(note.title)}>X</button>
        </div>
      ))}
      <p>Add Note</p>
      <form onSubmit={addNote}>
        <input value={title} onChange={(e) => {setTitle(e.target.value)}}></input>
        <button>add Note</button>
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
