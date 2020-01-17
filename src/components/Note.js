import React, { useContext, useState, useEffect } from 'react';
import NotesContext from '../context/notes-context';

const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({
        x: event.pageX,
        y: event.pageY
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };

  });
  return position;
};

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