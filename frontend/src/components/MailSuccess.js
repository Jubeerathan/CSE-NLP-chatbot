import React from 'react';
import './styles/MailSuccess.css'; 

const MailSuccess = () => {
  return (
    <div>
      <section className="mail-success section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3 col-12">
              <div className="success-inner">
                <h1>
                  <i className="fa fa-envelope"></i>
                  <span>Hey There, <br></br>Your account has been created!</span>
                </h1>
                <p>
                Please, verify it by clicking the activation link that has been sent to your email.<br></br> If the email doesn't appear shortly, please be sure to check your spam.
                </p>
                <a href="/" className="btn btn-primary btn-lg">
                  Go Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </section> 
    </div>
  );
};

export default MailSuccess;

