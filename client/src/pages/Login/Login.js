import React, { useEffect, useState } from "react";
import Wrapper from "./loginStyles";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAppContext } from "../../context";

const Login = () => {
  const initialState = {
    name: "",
    phoneNumber: "",
    address: "",
    gender: "none",
    role: "none",
    email: "",
    password: "",
  };
  const navigate = useNavigate();
  const [state, setState] = useState(initialState);
  const { setUser } = useAppContext();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!state.email || !state.password) {
      console.log("empty state");
      return;
    } else {
      let response;
      response = await axios.post(
        "http://localhost:5000/api/users/login",
        state
      );
      const { user } = response.data;
      console.log(user);
      setUser(user);
      navigate("/");
    }
  };

  return (
    <Wrapper>
      <div className="container-login">
        <form
          className="sub-container-login"
          id="container"
          onSubmit={onSubmit}
        >
          <h1 style={{ fontWeight: "bold" }}>Login</h1>
          <label>Email</label>
          <input
            className="form-control"
            type="email"
            placeholder="Enter Email"
            onChange={(e) => setState({ ...state, email: e.target.value })}
          />
          <label className="text-start">Password</label>
          <input
            className="form-control"
            type="password"
            placeholder="*******"
            onChange={(e) => setState({ ...state, password: e.target.value })}
          />
          <button type="submit" class="btn btn-primary">
            Login
          </button>
          <div className="d-flex flex-row gap-2">
            <div style={{ color: "#FFF", fontSize: "18px", marginTop: "5px" }}>
              Still not registered ?
            </div>
            <Link
              to="/register"
              style={{
                color: "#006400",
                fontWeight: "bold",
                fontSize: "19px",
                marginTop: "5px",
              }}
            >
              Register
            </Link>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

export default Login;
