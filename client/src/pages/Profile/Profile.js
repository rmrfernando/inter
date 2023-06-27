import React, { useEffect } from "react";
import Wrapper from './ProfileStyles'


const Profile = () => {

  return (
    <Wrapper>
     <div className="container-profile">
      <form className="sub-container-profile shadow" id="container">
        <h1 style={{fontWeight:"bold"}}>Profile</h1>
        <div style={{paddingLeft:"20px"}}>
            <div>
            <label className="left">Name</label>
            <label className="right">Roshail Fernando</label>
            </div>
            <div>
            <label className="left">Email</label>
            <label className="right">Rosh@gmail.com</label>
            </div>
            <div>
            <label className="left">Phone number</label>
            <label className="right">0763622407</label>
            </div>
            <div >
            <label className="left">Address</label>
            <label className="right">210/2b Rathmaldeniya,Rd panninpitiya</label>
            </div>
            <div>
            <label className="left">Gender</label>
            <label className="right">Female</label>
            </div>
            <button type="submit" className="btn btn-primary shadow-sm ">Edit</button>
        </div>   
      </form>
    </div>
    </Wrapper>

  );
};

    

export default Profile;
