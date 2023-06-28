import React, { useEffect, useState } from "react";
import Wrapper from "./RegisterStyles";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAppContext } from "../../context";

const Register = () => {
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

    if (
      !state.name ||
      !state.phoneNumber ||
      !state.address ||
      !state.gender ||
      !state.role ||
      !state.email ||
      !state.password
    ) {
      console.log("empty state");
      return;
    } else {
      let response;
      response = await axios.post("http://localhost:5000/api/users", state);
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
          <h1 style={{ fontWeight: "bold" }}>Register</h1>
          <label>Name</label>
          <input
            className="form-control"
            type="text"
            placeholder="Enter Name"
            onChange={(e) => setState({ ...state, name: e.target.value })}
          />
          <label>Gender</label>
          <select
            defaultValue={"none"}
            className="form-control"
            value={state.gender}
            onChange={(e) => setState({ ...state, gender: e.target.value })}
          >
            <option value="none" disabled hidden>
              Select gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          <label>PhoneNum</label>
          <input
            className="form-control"
            type="text"
            placeholder="Enter PhoneNum"
            onChange={(e) =>
              setState({ ...state, phoneNumber: e.target.value })
            }
          />

          <label>Address</label>
          <input
            className="form-control"
            type="Address "
            placeholder="Enter Address"
            onChange={(e) => setState({ ...state, address: e.target.value })}
          />
          <label>Role</label>
          <select
            className="form-control"
            value={state.role}
            onChange={(e) => setState({ ...state, role: e.target.value })}
          >
            <option value="none" selected disabled hidden>
              Select role
            </option>
            <option value="user">User</option>
            <option value="staff">Staff</option>
            <option value="admin">Admin</option>
          </select>
          <label>Email</label>
          <input
            className="form-control"
            type="text"
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
            Register
          </button>
          <div className="d-flex flex-row gap-2">
            <div style={{ color: "#FFF", fontSize: "18px", marginTop: "5px" }}>
              Already a user ?
            </div>
            <Link
              to="/login"
              style={{
                color: "#006400",
                fontWeight: "bold",
                fontSize: "19px",
                marginTop: "5px",
              }}
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

export default Register;
