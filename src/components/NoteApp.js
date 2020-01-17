import React, { useState, useEffect, useReducer } from 'react';
import Note from '../components/Note';
import notesReducer from '../reducers/notes';


const NoteApp = () => {
  // const [notes, setNotes] = useState([]);
  const [notes, notesDispatch] = useReducer(notesReducer, []);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const addNote = (event) => {
    event.preventDefault();
    notesDispatch({ type: 'ADD_NOTE', title, body });
    // setNotes([
    //   ...notes,
    //   { title, body }
    // ]);
    setTitle('');
    setBody('');
  };

  const removeNote = (title) => {
    // setNotes(notes.filter((note) => note.title !== title));
    notesDispatch({ type: 'REMOVE_NOTE', title })
  };

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem('notes'));
    if (notes) {
      notesDispatch({ type: 'POPULATE_NOTES', notes });
      // setNotes(notesData);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  return (
    <div>
      <h1>Notes</h1>
      {notes.map((note) => (
        <Note key={note.title} note={note} removeNote={removeNote} />
      ))}
      <p>Add Note</p>
      <form onSubmit={addNote}>
        <input value={title} onChange={(e) => { setTitle(e.target.value) }}></input>
        <textarea value={body} onChange={(e) => { setBody(e.target.value) }}></textarea>
        <button>add Note</button>
      </form>
    </div>
  )
}

export default NoteApp;