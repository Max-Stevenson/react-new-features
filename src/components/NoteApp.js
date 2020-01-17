import React, { useEffect, useReducer } from 'react';
import notesReducer from '../reducers/notes';
import NoteList from '../components/NoteList';
import AddNoteForm from '../components/AddNoteForm';
import NotesContext from '../context/notes-context';


const NoteApp = () => {
  const [notes, notesDispatch] = useReducer(notesReducer, []);

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem('notes'));
    if (notes) {
      notesDispatch({ type: 'POPULATE_NOTES', notes });
    };
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  return (
    <NotesContext.Provider value={{ notes, notesDispatch }}>
      <h1>Notes</h1>
      <NoteList/>
      <AddNoteForm/>
    </NotesContext.Provider>
  )
}

export default NoteApp;