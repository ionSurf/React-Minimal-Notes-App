import React, { Component } from 'react';

class Modal extends Component {
    constructor( props ) {
        super(props);
    }

    render() { return(
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">{ this.props.note.date.getSeconds().toString() } seconds ago</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    { this.props.note.content }
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary" onClick={ () => { this.props.editNote( this.props.note.id ) } }>Save changes</button>
                </div>
                </div>
            </div>
        </div>
    ); };
}

export default Modal;