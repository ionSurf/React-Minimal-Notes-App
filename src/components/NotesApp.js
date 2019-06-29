import React from 'react';
import Note from './Note';

const NotesApp = ({
    notes,
    addNote,
    deleteNote,
    handleEdit,
    handleDelete
}) => {
    const notesList = notes.length ? (
        notes.map( note => {
            return (
                <Note
                    // Attributes
                    id      = { note.id }
                    date    = { note.date }
                    content = { note.content}
                    // Methods
                    handleEdit      = { handleEdit }
                    handleDelete    = { handleDelete } />
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
