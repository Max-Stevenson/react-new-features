import React, { useContext } from 'react';
import NotesContext from '../context/notes-context';
import useMousePosition from '../hooks/useMousePosition';

const Note = ({ note }) => {
  const { notesDispatch } = useContext(NotesContext);
  const mousePosition = useMousePosition();

  return (
    <div key={note.title}>
      <h3>{note.title}</h3>
      <p>{note.body}</p>
      <p>{mousePosition.x}, {mousePosition.y}</p>
      <button onClick={() => notesDispatch({ type: 'REMOVE_NOTE', title: note.title })}>X</button>
    </div>
  );
};

export default Note;