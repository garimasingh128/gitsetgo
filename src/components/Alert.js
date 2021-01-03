import React from "react";

const Alert = ({closeAlert, alertMsg}) => {
  return (
    <div className="row justify-content-center" 
      style={{ marginTop: 20 }}
    >
      <div className="col-6 align-self-center">
        <div className="alert alert-danger alert-dismissible" role="alert">
          <button 
            type="button" 
            className="close" 
            data-dismiss="alert" 
            aria-label="Close"
            onClick={closeAlert}>
              <span aria-hidden="true">&times;</span>
            </button>
            {alertMsg}
        </div>
      </div>
    </div>
  );
};

export default Alert;