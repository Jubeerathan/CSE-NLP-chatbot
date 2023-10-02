import React, { useState, useEffect } from 'react';
import axios from 'axios';
import background from './images/Robot.png';


function ChangePassword() {

  const [userdetails, setuserdetails] = useState({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const [Email, setEmail] = useState('');
  const [showPNMAlert, setShowPNMAlert] = useState(false);
  const [showPTSAlert, setShowPTSAlert] = useState(false);
  const [showDetailsSavedAlert, setShowDetailsSavedAlert] = useState(false);
  const [showBadCredentialsAlert, setShowBadCredentialsAlert] = useState(false);

  // Load user details from local storage when the component mounts
  useEffect(() => {
    const savedUserEmail = JSON.parse(localStorage.getItem('userEmail'));

    if (savedUserEmail) {
      setEmail(savedUserEmail);
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
       // Save user details to local storage
      const response = await axios.put('http://127.0.0.1:8000/changepassword/', { ...userdetails, email: Email });
      const data = response.data;
      if (data === "Passwords didn't matched") {
        setShowPNMAlert(true);
      }else if(data === "Password is too short"){
        setShowPTSAlert(true);

      }else if(data === "password changed successfully"){
        setShowDetailsSavedAlert(true);
        
      }else if(data === "Bad Credintials"){
        setShowBadCredentialsAlert(true);
        
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundImage: `url(${background})`,
    paddingBlock: '50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
   }} >
    <div className="container" >
      <div className="content-header">
        <div className="container">
          <div className="row mb-2" style={{paddingTop:'0px'}}>
            <div className="col-lg-7 col-md-7 col-sm-12">
              <h1 className="fs24 page-header-title" style={{ textAlign: 'left', color:'#FFFFFF', margin:'0px 0px 8px', opacity: 0.5}}>Change Password</h1>
              <p className="m-0 mb-3 fs16 page-header-desc fs20"><br /></p>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12 mb-1">
              <div className="img-boxes"></div>
            </div>
          </div>
        </div>
      </div>

       {/* Adjust the height value above as needed style={{ height: 'calc(100vh - 100px)', paddingTop:'30px'}}*/}
       <div className="main" style={{ height: 'calc(100vh - 100px)', paddingTop:'30px'}} onSubmit={handleSubmit}>
          <div className="container mt-4">
            <div className="row">
              <div className="col-md-6">
                <form action="/users/edit_profile" id="UserEditProfileForm" method="post" acceptCharset="utf-8">
                  <div style={{ display: 'none' }}>
                    <input type="hidden" name="_method" value="POST" />
                  </div>
                  <div className="card" style={{ minHeight: '300px', width: '100%',backgroundColor: 'rgba(255, 255, 255, 0.6)' }}>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-12" style={{ color: '#182359D9', margin: '0px 0px 8px' }}>
                          <div className="form-group" style={{ textAlign: 'left', fontSize: '20px', paddingTop: '20px', paddingBottom: '10px' }}>
                            <label style={{ paddingBottom: '10px' }}>Current Password</label>
                            <input
                              value={userdetails.currentPassword}
                              type='password'
                              onChange={(e) => {
                                setuserdetails({ ...userdetails, currentPassword: e.target.value });
                              }}
                              placeholder='Current password'
                              className='form-control'
                              required="required"
                              style={{ paddingBottom: '10px', paddingTop: '10px' }}
                            />
                          </div>
                          <div className="form-group" style={{ textAlign: 'left', fontSize: '20px', paddingTop: '20px', paddingBottom: '20px' }}>
                            <label style={{ paddingBottom: '10px' }}>New Password</label>
                            <input
                              value={userdetails.newPassword}
                              type='password'
                              onChange={(e) => {
                                setuserdetails({ ...userdetails, newPassword: e.target.value });
                              }}
                              placeholder='New password'
                              className='form-control'
                              required="required"
                              style={{ paddingBottom: '10px', paddingTop: '10px' }}
                            />
                          </div>
                          <div className="form-group" style={{ textAlign: 'left', fontSize: '20px', paddingTop: '20px', paddingBottom: '20px' }}>
                            <label style={{ paddingBottom: '10px' }}>Confirm New Password</label>
                            <input
                              value={userdetails.confirmNewPassword}
                              type='password'
                              onChange={(e) => {
                                setuserdetails({ ...userdetails, confirmNewPassword: e.target.value });
                              }}
                              placeholder='Confirm new password'
                              className='form-control'
                              required="required"
                              style={{ paddingBottom: '10px', paddingTop: '10px' }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer" style={{ textAlign: 'left', paddingTop: '20px', paddingBottom: '20px' }}>
                      <button className="btn icon-btn-save btn-info btn-fill" type="submit"  style={{ fontSize: '18px', padding: '8px 25px', color: '#FFF', backgroundColor: '#86D4F5' }}>Save</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
    </div>
    </div>
  );
}

export default ChangePassword;
