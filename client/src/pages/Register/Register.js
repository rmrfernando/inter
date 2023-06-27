import React, { useEffect } from "react";
import Wrapper from './RegisterStyles'


const Register = () => {

  return (
    <Wrapper>
     <div className="container-login">
      <form className="sub-container-login" id="container">
        <h1 style={{fontWeight:"bold"}}>Register</h1>
        <label>Name</label>
        <input className="form-control" type="Full Name" placeholder="Enter Name" />
        <label>Gender</label>
        <input className="form-control" type="Gender" placeholder="Enter gender" />
        <label>PhoneNum</label>
        <input className="form-control" type="PhoneNum" placeholder="Enter PhoneNum" />
        <label>Email</label>
        <input className="form-control" type="Email" placeholder="Enter Email" />
        <label>Address</label>
        <input className="form-control" type="Address " placeholder="Enter Address" />
        <label>Role</label>
        <input className="form-control" type="Role" placeholder="Enter role" />
        <label className="text-start">Password</label>
        <input className="form-control" type="password" placeholder="*******" />
        <button type="submit" class="btn btn-primary">Submit</button>
       {/* <div className="d-flex flex-row gap-2">
        <div style={{color:"#FFF", fontSize:"18px", marginTop:"5px"
      }}>Still not registered ?</div>
        <div style={{color:"#006400", fontWeight:"bold",fontSize:"19px", marginTop:"5px"}}>Register</div>
        </div>
         */}
      </form>
    </div>
    </Wrapper>

  );
};

    

export default Register;
