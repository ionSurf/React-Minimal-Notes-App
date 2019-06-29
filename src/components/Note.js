import React from 'react';

const Note = ( {
    id,
    date,
    content,
    handleEdit,
    handleDelete
} ) => { return (
    <div className="container w-25" style={{ padding: '1rem', float: 'left', minWidth: '18rem' }} key={ id } >
        <div className="card text-white bg-secondary mb-3" style={{ width: '100%', height: '18rem' }}>
            <div className="card-header">
                <span style={{  }}>{ date.getSeconds().toString() } seconds ago</span>
                <nav className="corner-buttons" style={{ textAlign: 'right', float: 'right' }} >
                    <button type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target="#exampleModal" >
                        +
                    </button><span> </span>
                    <button onClick={() => { handleEdit( id ) }} type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target="#exampleModal" >
                        o
                    </button><span> </span>
                    <button onClick={() => { handleDelete( id ) }} type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target="#confirmationWindow" >
                        x
                    </button>
                </nav>
            </div>
            <div className="card-body">
                <p className="card-text">{ content }</p>
            </div>
        </div>
    </div>
)};

export default Note;