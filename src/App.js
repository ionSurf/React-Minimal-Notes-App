import React, { Component } from 'react';
import NotesApp   from './components/NotesApp';
import NaviBar    from './components/NaviBar';
import FooterNavi from './components/FooterNavi';
import Modal      from './components/Modal';

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
        note: { id: 0, date: new Date(), content: "" }
      }
      //, view: "dashboard"
    };
  }

  componentDidMount = () => {
    console.log( this.state.notes );
  }

  updateModalView = ( note_id ) => {
    const note = this.state.notes.find( (note) => note.id === note_id ); console.log( note.content );

    this.setState({
      ModalView: {
        note: note
      }
    });
  };

  /** 
    *   App Functions
    */ 

  addNote = ( note ) => {
    note.id = Math.random();
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

  openDialog () {};

  closeDialog() {};

  showMenu() {};

  hideMenu() {};

  showSidebar() {};

  hideSidebar() {};

  render() { return (
    <div className="notes-app">
      <NaviBar title="Notes App"></NaviBar>
      <main role="main" className="flex-shrink-0">
          <NotesApp 
            notes           = { this.state.notes }
            addNote         = { this.addNote }
            updateModalView = { this.updateModalView }
            deleteNote      = { this.deleteNote } />
      </main>
      <FooterNavi />
      <Modal
        note      = { this.state.ModalView.note }
        editNote  = { this.editNote } />
    </div>
  ); };
}

export default App;
