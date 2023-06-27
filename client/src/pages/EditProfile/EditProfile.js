import React, { useEffect } from "react";
import Wrapper from './EditProfileStyles'


const EditProfile = () => {

  return (
    <Wrapper>
     <div className="container-profile">
      <form className="sub-container-profile shadow" id="container">
        <h1 style={{fontWeight:"bold"}}>Edit Profile</h1>
        

        <div className="d-flex flex-row">
            <div className="input-left" style={{ width: "300px" }}>
              <label className="input-label">Name</label>
              <input className="form-control" type="text" placeholder="Enter name" />
            </div>
            <div className="input-right" style={{ width: "300px" }}>
              <label className="input-label">Phone number</label>
              <input
                className="form-control"
                type="text"
                placeholder="Enter phone number"
              />
            </div>
        </div>
        <div className="d-flex flex-row">
            <div className="input-left" style={{ width: "300px" }}>
              <label className="input-label">Address</label>
              <input className="form-control" type="text" placeholder="Enter Address" />
            </div>
            <div className="input-right" style={{ width: "300px" }}>
              <label className="input-label">Gender</label>
              <select className="form-control">
                <option value="none" selected disabled hidden>
                  Select gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
        </div>

        <div className="d-flex flex-row">
            <div className="input-left" style={{ width: "300px" }}>
              <label className="input-label">Role</label>
              <select className="form-control">
                <option value="none" selected disabled hidden>
                  Select role
                </option>
                <option>User</option>
                <option>Staff</option>
                <option>Administrator</option>
              </select>
            </div>
            <div className="input-right" style={{ width: "300px" }}>
              <label className="input-label">Email</label>
              <input
                className="form-control"
                type="text"
                placeholder="Enter email"
              />
            </div>
        </div>
        <button type="submit" className="btn btn-primary shadow-sm ">Edit</button> 
      </form>
    </div>
    </Wrapper>

  );
};

    

export default EditProfile;
