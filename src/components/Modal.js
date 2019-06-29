import React, { Component } from 'react';

class Modal extends Component {
    render() { return(
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">{ this.props.title }</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="message-text" className="col-form-label">Content:</label>
                            <textarea className="form-control" id="message-text" value={ this.props.note.content } onChange={() => {  }}></textarea>
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={ () => { this.props.saveHandle( this.props.note ) } }>Save</button>
                </div>
                </div>
            </div>
        </div>
    ); };
}

export default Modal;