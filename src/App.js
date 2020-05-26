import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addNote, flushNotes } from './actions';

function App() {

  let newNote;
  const dispatch = useDispatch();
  const notes = useSelector( state => state.notes)
                .map(
                  (note) => <div key={note} className="note" >{note}</div>
                );

  return (
    <div className="App">
      <button className="flush"  onClick={ () => dispatch(flushNotes()) }>🗑️</button>
      <div className="new">
        <form>
          <input type="text" name="name" placeholder="Type in a note" value={newNote}  onChange={ (event) => newNote = event.target.value } />
        </form>
        <button onClick={ () => dispatch(addNote(newNote)) }>➕</button>
      </div>
      <div className="note-container">
        {notes}
      </div>
    </div>
  );
}

export default App;
