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
    const nodeArr = noteText.split(' | ')
    return {
      heading: nodeArr[0],
      body: nodeArr[1]
    }
  }

  return (
    <div className="App">
      <button className="flush"  onClick={ () => dispatch(flushNotes()) }>
      <FontAwesomeIcon icon={faTrash} height="42px" />
      </button>
      <div className="new">
        <input type="text" name="name" placeholder="Type in a note | seperate heading and body with '|'" value={newNote}  onChange={ (event) => newNote = event.target.value } />
        <button onClick={ () => dispatch(addNote(getNoteObject(newNote))) }>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
      <div className="note-container">
        {notes}
      </div>
    </div>
  );
}

export default App;
