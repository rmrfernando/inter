import React, { useEffect, useState } from "react";
import Wrapper from "./EditProfileStyles";
import axios from "axios";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useAppContext } from "../../context";

const EditProfile = () => {
  const { user: userData, setUser } = useAppContext();
  const initialState = {
    ...userData,
  };

  const navigate = useNavigate();
  const [state, setState] = useState(initialState);

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      let response;
      response = await axios.patch(
        `http://localhost:5000/api/users/one/${state._id}`,
        state
      );
      const { user } = response.data;
      console.log(user);
      setUser(user);
      navigate(-1);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Wrapper>
      <div className="container-profile">
        <form
          className="sub-container-profile shadow"
          id="container"
          onSubmit={onSubmit}
        >
          <h1 style={{ fontWeight: "bold" }}>Edit Profile</h1>

          <div className="d-flex flex-row">
            <div className="input-left" style={{ width: "300px" }}>
              <label className="input-label">Name</label>
              <input
                className="form-control"
                type="text"
                placeholder="Enter name"
                value={state.name}
                onChange={(e) => setState({ ...state, name: e.target.value })}
              />
            </div>
            <div className="input-right" style={{ width: "300px" }}>
              <label className="input-label">Phone number</label>
              <input
                className="form-control"
                type="text"
                placeholder="Enter phone number"
                value={state.phoneNumber}
                onChange={(e) =>
                  setState({ ...state, phoneNumber: e.target.value })
                }
              />
            </div>
          </div>
          <div className="d-flex flex-row">
            <div className="input-left" style={{ width: "300px" }}>
              <label className="input-label">Address</label>
              <input
                className="form-control"
                type="text"
                placeholder="Enter Address"
                value={state.address}
                onChange={(e) =>
                  setState({ ...state, address: e.target.value })
                }
              />
            </div>
            <div className="input-right" style={{ width: "300px" }}>
              <label className="input-label">Gender</label>
              <select
                className="form-control"
                value={state.gender}
                onChange={(e) => setState({ ...state, gender: e.target.value })}
              >
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
              <input
                className="form-control"
                disabled
                value={state.role}
                onChange={(e) => setState({ ...state, role: e.target.value })}
              ></input>
            </div>
            <div className="input-right" style={{ width: "300px" }}>
              <label className="input-label">Email</label>
              <input
                className="form-control"
                type="email"
                disabled
                placeholder="Enter email"
                value={state.email}
                onChange={(e) => setState({ ...state, email: e.target.value })}
              />
            </div>
          </div>
          <div className="d-flex flex-row">
            <div className="input-left" style={{ width: "300px" }}>
              <label className="input-label">Password</label>
              <input
                type="password"
                className="form-control"
                value={state.password}
                onChange={(e) =>
                  setState({ ...state, password: e.target.value })
                }
              ></input>
            </div>
          </div>
          <button type="submit" className="btn btn-primary shadow-sm ">
            Submit
          </button>
        </form>
      </div>
    </Wrapper>
  );
};

export default EditProfile;
