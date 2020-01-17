import React, { useState } from 'react';

const AddNoteForm = ({ notesDispatch }) => {
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
      <p>Add Note</p>
      <form onSubmit={addNote}>
        <input value={title} onChange={(e) => { setTitle(e.target.value) }}></input>
        <textarea value={body} onChange={(e) => { setBody(e.target.value) }}></textarea>
        <button>add Note</button>
      </form>
    </div>
  );
};

export default AddNoteForm;