import React from 'react';

function EditProfile() {
  return (
    <div className="container" style={{ minHeight: '100vh' }} >
      <div className="content-header">
        <div className="container">
          <div className="row mb-2" style={{paddingTop:'50px'}}>
            <div className="col-lg-7 col-md-7 col-sm-12">
              <h1 className="fs24 page-header-title" style={{ textAlign: 'left', color:'#182359D9', margin:'0px 0px 8px'}}>Edit Profile</h1>
              <p className="m-0 mb-3 fs16 page-header-desc fs20"><br /></p>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12 mb-1">
              <div className="img-boxes"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="main" style={{paddingTop:'30px'}}>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-12">
              <form action="/users/edit_profile" id="UserEditProfileForm" method="post" acceptCharset="utf-8">
                <div style={{ display: 'none' }}>
                  <input type="hidden" name="_method" value="POST" />
                </div>
                <div className="card" style={{ minHeight: '300px' }}>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-12" style={{color:'#182359D9', margin:'0px 0px 8px'}}>
                        <div className="form-group" style={{ textAlign: 'left',fontSize: '20px',paddingTop:'20px', paddingBottom:'10px'}}>
                          <label style={{paddingBottom:'10px'}}>First Name</label>
                          <input name="data[User][first_name]" className="form-control" placeholder="First name" type="text" id="UserFirstName" style={{paddingBottom:'10px',paddingTop:'10px'}}/>
                        </div>
                        <div className="form-group" style={{ textAlign: 'left',fontSize: '20px',paddingTop:'20px', paddingBottom:'20px'}}>
                          <label style={{paddingBottom:'10px'}}>Last Name</label>
                          <input name="data[User][last_name]" className="form-control" placeholder="Last name" type="text" id="UserLastName" required="required" style={{paddingBottom:'10px',paddingTop:'10px'}} />
                        </div>
                        <div className="form-group" style={{ textAlign: 'left',fontSize: '20px',paddingTop:'20px', paddingBottom:'10px'}}>
                          <label style={{paddingBottom:'10px'}}>Role</label>
                          <select className='form-control'>
                            <option value="role">Role</option>
                            <option value="undergraduate">Undergraduate</option>
                            <option value="postgraduate">Postgraduate</option>
                          </select>
                        </div>
                        <div className="form-group" style={{ textAlign: 'left',fontSize: '20px',paddingTop:'20px', paddingBottom:'10px'}}>
                          <label style={{paddingBottom:'10px'}}>About You</label>
                          {/* <input name="data[User][about_you]" className="form-control" placeholder="About you" type="text" id="Userintro"/> */}
                          <textarea name="data[User][description]" class="form-control" required="required" cols="30" rows="5" id="UserDescription" spellcheck="false" style={{ height: '150px' }}>About you</textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer" style={{ textAlign: 'left',paddingTop:'20px', paddingBottom:'20px'}}>
                    <button className="btn icon-btn-save btn-info btn-fill" type="submit" style={{ fontSize: '18px', padding: '8px 25px', color:'#FFF',backgroundColor:'#86D4F5'}}>Save</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
