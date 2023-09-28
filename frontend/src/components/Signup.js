import { useState } from "react";
import { validateEmail } from "./utils";
import { Link, useNavigate } from 'react-router-dom';
import './styles/style.css';
import logo from './images/CSEBOT.png';
import background from './images/sliot.png';
import { addUser } from '../services/AthenticationServices';
import { Modal, Button } from 'react-bootstrap';
import ErrorAlert from "./ErrorAlert";

const PasswordErrorMessage = () => {
  return (
    <p style={{ color: 'red', fontSize: '12px' }}>Password should have at least 8 characters</p>
  );
};
const PasswordNotMatchedErrorMessage = () => {
  return (
    <p style={{ color: 'red', fontSize: '12px' }}>Passwords do not match</p>
  );
};

function Signup() {
  const navigate = useNavigate(); // Define the navigate function
  const [userdetals, setuserdetails] = useState({
    username: "",
    email: "",
    pword: "",
    confirmPword: "",
  });
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [confirmPassword, setConfirmPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [passwordMatch, setPasswordMatch] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showRegistrationFailed, setShowRegistrationFailed] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handlePasswordChange = (event) => {
    setPassword({ ...password, value: event.target.value });
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword({ ...confirmPassword, value: event.target.value });
    if (event.target.value === password.value) {
      setPasswordMatch(true);
    }
    else { setPasswordMatch(false); };
  };

  const getIsFormValid = () => {
    return (
      userdetals.username &&
      validateEmail(userdetals.email) &&
      password.value.length >= 8 &&
      passwordMatch
    );
  };

  const clearForm = () => {
    setPassword({
      value: "",
      isTouched: false,
    });
    setConfirmPassword({
      value: "",
      isTouched: false,
    });
  };

  const handleAlertClose = () => {
    setShowAlert(false);
    if (formSubmitted) {
      navigate('../mailsuccess');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addUser({...userdetals,pword:password.value,confirmPword:confirmPassword.value});
    setFormSubmitted(true);
    clearForm();
    setShowAlert(true);
  };

  return (
    <div>
      <div className='login template d-flex justify-content-center align-items-center vh-200 bg-primary' style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', paddingBlock: '50px',
        backgroundRepeat: 'no-repeat',
      }}>
        <div className='form_container p-4 rounded' style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
          <h2 className="fw-light text-info mb-5">
            <img
              style={{
                display: "flex",
                width: "100px",
                height: "100px",
                margin: "0 auto"
              }}
              src={logo}
            />
          </h2>
          <form onSubmit={handleSubmit}>
            <fieldset>
              <h2 className='text-center'>Sign Up</h2>
              <div className='mb-2'>
                <label>
                  Username <sup style={{ color: 'red' }}>*</sup>
                </label>
                <input
                  onChange={(e) => {
                    setuserdetails({ ...userdetals, username: e.target.value });
                  }}
                  placeholder="Username"
                  className='form-control'
                />
              </div>
              <div className='mb-2'>
                <label>
                  Email<sup style={{ color: 'red' }}>*</sup>
                </label>
                <input
                  onChange={(e) => {
                    setuserdetails({ ...userdetals, email: e.target.value });
                  }}
                  placeholder="Email address"
                  className='form-control'
                />
              </div>
              <div className='mb-2'>
                <label>
                  Password <sup style={{ color: 'red' }}>*</sup>
                </label>
                <input
                  value={password.value}
                  type="password"
                  onChange={handlePasswordChange}
                  onBlur={() => {
                    setPassword({ ...password, isTouched: true });
                  }}
                  placeholder="required"
                  className='form-control'
                />
              </div>
              <div>
                {password.isTouched && password.value.length < 8 ? (
                  <PasswordErrorMessage />
                ) : null}
              </div>
              <div className='mb-2'>
                <label>
                  Confirm Password <sup style={{ color: 'red' }}>*</sup>
                </label>
                <input
                  value={confirmPassword.value}
                  type="password"
                  onChange={handleConfirmPasswordChange}
                  onBlur={() => {
                    setConfirmPassword({ ...confirmPassword, isTouched: true });
                  }}
                  placeholder="required"
                  className='form-control'
                />
                {confirmPassword.isTouched && !passwordMatch ? (
                  <PasswordNotMatchedErrorMessage />
                ) : null}
              </div>
              <div className='d-grid'>
                <button className='btn btn-primary' type="submit" disabled={!getIsFormValid()}>
                  Create account
                </button>
              </div>
              <p className='text-start mt-2'>
                Do you have an account?
                <Link to='/login' className='ms-2'>Login Here</Link>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
      {formSubmitted ? (
        <div>
          {/* Display the alert */}
          <Modal show={showAlert} onHide={handleAlertClose} backdrop="static" keyboard={false}>
            <Modal.Header closeButton>
              <Modal.Title>Alert</Modal.Title>
            </Modal.Header>
            <Modal.Body>You've got mail!</Modal.Body>
            <Modal.Footer>
              <Button variant="success" onClick={handleAlertClose}>
                OK
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      ) : (
        <div>
          {/* Display the registration failed modal */}
          <Modal show={showRegistrationFailed} onHide={handleAlertClose} backdrop="static" keyboard={false}>
            <Modal.Header closeButton>
              <Modal.Title>Error</Modal.Title>
            </Modal.Header>
            <Modal.Body>Registration failed. Please try again.</Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={handleAlertClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      )}
    </div>
  )
}

export default Signup;
