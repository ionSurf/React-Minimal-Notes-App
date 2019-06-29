import React, { Component } from 'react';
import NotesApp       from './components/NotesApp';
import NaviBar        from './components/NaviBar';
import FooterNavi     from './components/FooterNavi';
import Modal          from './components/Modal';
import ConfirmWindow  from './components/ConfirmWindow';

//  Random Date Function
function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

class App extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      notes: [
        { id: 1, date: randomDate(new Date(2012, 0, 1), new Date()), content: 'This is a new note.' },
        { id: 2, date: randomDate(new Date(2012, 0, 1), new Date()), content: 'This is another note.' },
        { id: 3, date: randomDate(new Date(2012, 0, 1), new Date()), content: 'This is a third note.' }
      ],
      ModalView: {
        title       : "",
        note        : { id: 0, date: new Date(), content: "" },
        mode        : "create",
        saveAction  : null
      },
      confirmWindow: {
        content: "Are you sure you want to delete this note?",
        noteID:  0
      }
    };
  }

  componentDidMount = () => {
    console.log( this.state.notes );
  }

  /** 
    *   App Functions
    */ 

  addNote = ( note ) => {
    console.log( note );
    let notes = [ ...this.state.notes, note ];
    this.setState({
      notes: notes
    });
  };

  editNote = ( note ) => {
    let notes = [ ...this.state.notes ];
    //console.log( notes );
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
  
  deleteNote = ( note_id ) => {
    console.log( "deleteNote called with id: ", note_id );
    const notes = this.state.notes.filter( note => {
      return note.id !== note_id;
    } );

    this.setState({
      notes
    });
  };

  searchNotes = ( text ) => {
    var regexConst = new RegExp( text );

    const result = this.state.notes.filter( note => {
      return regexConst.test( note.content );
    } );

    console.log( result );
  };

  updateEditWindow = ( note_id ) => {
    if ( note_id !== undefined ) {
      const note = this.state.notes.find( (note) => note.id === note_id ); console.log( note.content );

      this.setState({
        ModalView: {
          title : note.date.getSeconds().toString() + " seconds ago",
          note : note,
          mode : "edit",
          saveAction : this.editNote
        }
      });
    } else {
      const note = { id: Math.floor(Math.random() * 100), date: new Date(), content: 'Write something here...' };

      this.setState({
        ModalView: {
          title : "New Note",
          note: note,
          mode: "create",
          saveAction : this.addNote
        }
      });
    }
  };

  updateConfirmWindow = ( note_id ) => {
    console.log( "updateConfirmWindow called", note_id );
    this.setState({
      confirmWindow: {
        content : "Are you sure you want to delete this note?",
        noteID  : note_id
      }
    });
  };

  render() { return (
    <div className="notes-app">
      <NaviBar title="Notes App"></NaviBar>
      <main role="main" className="flex-shrink-0">
          <NotesApp 
            notes        = { this.state.notes }
            addNote      = { this.addNote }  
            handleEdit   = { this.updateEditWindow }
            handleDelete = { this.updateConfirmWindow } />
      </main>
      <FooterNavi
        handleCreate     = { this.updateEditWindow } />
      <Modal
        title       = { this.state.ModalView.title }
        note        = { this.state.ModalView.note }
        saveHandle  = { this.state.ModalView.saveAction }
        addNote     = { this.addNote }
        editNote    = { this.editNote } />
      <ConfirmWindow
        content     = { this.state.confirmWindow.content }
        noteID      = { this.state.confirmWindow.noteID }
        deleteNote  = { this.deleteNote } />
    </div>
  ); };
}

export default App;