import React from 'react';
//import Note from './note';

const NotesApp = ({
    notes,
    addNote,
    deleteNote,
    updateModalView
}) => {
    const notesList = notes.length ? (
        notes.map( note => {
            return (
                <div className="container w-25" style={{ padding: '1rem', float: 'left', minWidth: '18rem' }} key={ note.id } >
                    <div className="card text-white bg-secondary mb-3" style={{ width: '100%', height: '18rem' }}>
                        <div className="card-header">{ note.date.getSeconds().toString() } seconds ago</div>
                        <div className="card-body" onClick={() => { updateModalView( note.id ) }}>
                            <h5 className="card-title">Dark card title</h5>
                            <p className="card-text">{note.content}</p>
                        </div>
                    </div>
                </div>   
            );
        } )
    ) : (
        <p className="alert">You have no notes</p>
    );

    return (
        <div className="collection-list">{ notesList }</div>
    );
};

export default NotesApp;
