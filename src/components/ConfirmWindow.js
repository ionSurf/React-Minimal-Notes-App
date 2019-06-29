import React from 'react';

const ConfirmWindow = ( {
    noteID,
    content,
    deleteNote
} ) => { return(
    <div className="modal fade" id="confirmationWindow" tabIndex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
        <div className="modal-dialog-centered modal-dialog modal-sm">
            <div className="modal-content">
                <div className="modal-body" style={{ textAlign: "center" }}>
                    { content }
                </div>
                <div className="modal-footer" style={{ textAlign: "center" }}>
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                    <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => deleteNote( noteID )} >Accept</button>
                </div>
            </div>
        </div>
    </div>
); }

export default ConfirmWindow;