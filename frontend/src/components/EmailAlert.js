import React, { useState } from 'react';
import './styles/snippet.css';

const EmailAlert = (alert ) => {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <div>
      {/* Modal for the alert */}
      <div id="modal-success" className={`modal modal-message modal-success fade ${showAlert ? 'show' : ''}`} tabIndex="-1" role="dialog" aria-hidden={!showAlert}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <i className="glyphicon glyphicon-check"></i>
            </div>
            <div className="modal-title">Alert</div>
            <div className="modal-body">You'vd got mail!</div>
            <div className="modal-footer">
              <button type="button" className="btn btn-success" onClick={() => setShowAlert(false)}>OK</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailAlert;
