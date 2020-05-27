import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { addNote, flushNotes } from './actions';

function App() {

  let newNote;
  const dispatch = useDispatch();
  const notes = useSelector( state => state.notes)
                .map(
                  (note) => <div key={note.heading} className="note" ><h1>{note.heading}</h1>{note.body}</div>
                );

  const getNoteObject = (noteText) => {
    return {
      heading: noteText.replace(/(([^\s]+\s\s*){4})(.*)/,"$1…"), // The first 4 words aare used for the heading 
      body: noteText}}

  return (
    <div className="App">
      <button className="flush"  onClick={ () => dispatch(flushNotes()) }>
        <FontAwesomeIcon icon={faTrash} />
      </button>
      <div className="new">
        <input type="text" 
               name="name" 
               placeholder="Type in to remember" 
               value={newNote} 
               onChange={ (event) => newNote = event.target.value } 
               />
        <button onClick={ () => dispatch(addNote(getNoteObject(newNote))) }>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
      <div className="note-container">
        <h1 className="empty" >Add a note :)</h1>
        {notes}
      </div>
    </div>
  );
}

export default App;
