import React, { Component } from 'react';
//import Note from './note';

const NotesApp = ({
    notes,
    addNote,
    editNote,
    deleteNote
}) => {
    const notesList = notes.length ? (
        notes.map( note => {
            return (
                <div className="container w-25" style={{ padding: '1rem', float: 'left', minWidth: '18rem' }}>
                <div className="card text-white bg-secondary mb-3" style={{ width: '100%', height: '18rem' }} key={ note.id }>
                    <div className="card-header">Header</div>
                    <div className="card-body" onClick={() => { editNote( note.id ) }}>
                        <h5 className="card-title">Dark card title</h5>
                        <p className="card-text">{note.content}</p>
                    </div>
                </div></div>   
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
