import React, { useEffect, useState } from "react";
import Wrapper from "./AddUserStyles";
import axios from "axios";
import { Routes, Route, useNavigate, useParams } from "react-router-dom";
import { useAppContext } from "../../context";

const AddUser = () => {
  const { editId } = useParams();
  const initialState = {
    name: "",
    phoneNumber: "",
    address: "",
    gender: "none",
    role: "none",
    email: "",
    password: "",
  };

  useEffect(() => {
    const init = async () => {
      const response = await axios.get(
        "http://localhost:5000/api/users/one/" + editId
      );
      setState(response.data.user);
    };
    if (editId) {
      init();
    }
  }, []);

  const navigate = useNavigate();
  const { user: userData, setUser } = useAppContext();
  const [state, setState] = useState(initialState);

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      let response;
      if (!editId) {
        response = await axios.post(`http://localhost:5000/api/users`, state);
      } else {
        response = await axios.patch(
          `http://localhost:5000/api/users/one/${editId}`,
          state
        );
      }
      const { user } = response.data;
      console.log(user);
      navigate(-1);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Wrapper>
      <div className="container">
        <form
          className="sub-container shadow"
          id="container"
          onSubmit={onSubmit}
        >
          {editId && <h1 style={{ fontWeight: "bold" }}>Edit Profile</h1>}
          {!editId && <h1 style={{ fontWeight: "bold" }}>Add Profile</h1>}

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
            </div>
          </div>

          <div className="d-flex flex-row">
            <div className="input-left" style={{ width: "300px" }}>
              <label className="input-label">Role</label>
              <select
                disabled={editId}
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
            </div>
            <div className="input-right" style={{ width: "300px" }}>
              <label className="input-label">Email</label>
              <input
                className="form-control"
                type="email"
                disabled={editId}
                placeholder="Enter email"
                value={state.email}
                onChange={(e) => setState({ ...state, email: e.target.value })}
              />
            </div>
          </div>
          {!editId && (
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
          )}
          <br />
          <button type="submit" className="btn btn-primary shadow-sm ">
            Submit
          </button>
        </form>
      </div>
    </Wrapper>
  );
};

export default AddUser;
