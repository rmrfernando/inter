import React, { useEffect } from "react";
import Wrapper from './loginStyles'


const Login = () => {

  return (
    <Wrapper>
     <div className="container-login">
      <form className="sub-container-login" id="container">
        <h1 style={{fontWeight:"bold"}}>Login</h1>
        <label>Email</label>
        <input className="form-control" type="email" placeholder="Enter Email" />
        <label className="text-start">Password</label>
        <input className="form-control" type="password" placeholder="*******" />
        <button type="submit" class="btn btn-primary">Find Day</button>
        <div className="d-flex flex-row gap-2">
          <div style={{color:"#FFF", fontSize:"18px", marginTop:"5px"
           }}>Still not registered ?
          </div>
          <div style={{color:"#006400", fontWeight:"bold",fontSize:"19px", marginTop:"5px"}}>Register</div>
        </div>
      </form>
    </div>
    </Wrapper>

  );
};

    

export default Login;
