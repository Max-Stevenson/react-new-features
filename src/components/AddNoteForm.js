import React, { useState, useContext } from 'react';
import NotesContext from '../context/notes-context';
import useMousePosition from '../hooks/useMousePosition';

const AddNoteForm = () => {
  const { notesDispatch } = useContext(NotesContext);
  const mousePosition = useMousePosition();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const addNote = (event) => {
    event.preventDefault();
    notesDispatch({ type: 'ADD_NOTE', title, body });
    setTitle('');
    setBody('');
  };

  return (
    <div>
      <p>Add Note {mousePosition.x} {mousePosition.y} </p>
      <form onSubmit={addNote}>
        <input value={title} onChange={(e) => { setTitle(e.target.value) }}></input>
        <textarea value={body} onChange={(e) => { setBody(e.target.value) }}></textarea>
        <button>add Note</button>
      </form>
    </div>
  );
};

export default AddNoteForm;