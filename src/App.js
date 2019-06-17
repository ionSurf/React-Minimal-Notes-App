import React, { Component } from 'react';
import NotesApp   from './components/NotesApp';
import MyTemplate from './components/MyTemplate';

class App extends Component {
  state = {
    notes: [
      { id: 1, date: new Date(), content: 'This is a new note.' },
      { id: 2, date: new Date(), content: 'This is another note.' },
      { id: 3, date: new Date(), content: 'This is a third note.' }
    ],
    view: "dashboard"
  };

  addNote ( note ) {
    note.id = Math.random();
    let notes = [ ...this.state.notes, note ];
    this.setState({
      notes: notes
    });
  };

  editNote ( note ) {
    let notes = [ ...this.state.notes ];
    notes.find( ( element ) => {
      if ( element.id === note.id ) {
        element.content = note.content;
        element.date    = new Date();
        return true;
      }
      return false;
    } );

    this.setState({
      notes: notes
    });
  };
  
  deleteNote ( note_id ) {
    const notes = this.state.notes.filter( note => {
      return note.id !== note_id;
    } );

    this.setState({
      notes
    });
  };

  searchNotes ( text ) {
    var regexConst = new RegExp( text );

    const result = this.state.notes.filter( note => {
      return regexConst.test( note.content );
    } );

    console.log( result );
  };

  openDialog () {};

  closeDialog() {};

  showMenu() {};

  hideMenu() {};

  showSidebar() {};

  hideSidebar() {};

  render() { return (
    <div className="notes-app">
      <MyTemplate title="Notes App"/>
      <NotesApp 
        notes       = { this.state.notes }
        addNote     = { this.addNote }
        editNote    = { this.editNote }
        deleteNote  = { this.deleteNote } />
    </div>
  ); };
}

export default App;
