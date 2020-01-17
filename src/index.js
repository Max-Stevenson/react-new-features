import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

// const NoteApp = () => {

//   const [notes, setNotes] = useState([]);
//   const [title, setTitle] = useState('');
//   const [body, setBody] = useState('');

//   const addNote = (event) => {
//     event.preventDefault();
//     setNotes([
//       ...notes,
//       { title, body }
//     ]);
//     setTitle('');
//     setBody('');
//   };

//   const removeNote = (title) => {
//     setNotes(notes.filter((note) => note.title !== title));
//   };

//   return (
//     <div>
//       <h1>Notes</h1>
//       {notes.map((note) => (
//         <div key={note.title}>
//           <h3>{note.title}</h3>
//           <p>{note.body}</p>
//           <button onClick={() => removeNote(note.title)}>X</button>
//         </div>
//       ))}
//       <p>Add Note</p>
//       <form onSubmit={addNote}>
//         <input value={title} onChange={(e) => { setTitle(e.target.value) }}></input>
//         <textarea value={body} onChange={(e) => { setBody(e.target.value) }}></textarea>
//         <button>add Note</button>
//       </form>
//     </div>
//   )
// }

const CounterApp = (props) => {
  const [count, setCount] = useState(props.count);
  const [text, setText] = useState('test');

  useEffect(() => {
    console.log('P');
    document.title = count;
  });

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
  );
};

CounterApp.defaultProps = {
  count: 0
};

// NoteApp.defaultProps = {
// };

ReactDOM.render(<CounterApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
