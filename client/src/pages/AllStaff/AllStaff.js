import React, { useEffect, useState } from "react";
import Wrapper from "./AllStaffStyles";
import { useAppContext } from "../../context";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AllStaff = () => {
  const navigate = useNavigate();
  const initialState = {
    name: "",
    phoneNumber: "",
    address: "",
    gender: "none",
    role: "none",
    email: "",
    password: "",
  };

  const { user: userData } = useAppContext();
  const [users, setUsers] = useState([]);

  const init = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/users/staff");
      console.log(response.data);
      setUsers(response.data.users);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    init();
  }, []);

  const handleDelete = async (id) => {
    const deletePrompt = window.confirm("Are you sure you want to delete?");
    if (deletePrompt) {
      const response = await axios.delete(
        `http://localhost:5000/api/users/one/${id}`
      );
      await init();
    }
  };

  return (
    <Wrapper>
      <div className="container-profile">
        <div className="button-div">
          <button
            type="button"
            className="btn btn-primary shadow-sm mb-5 px-4"
            onClick={() => navigate("/add-user")}
          >
            Add
          </button>
        </div>
        <div className="sub-container">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col" className="table-cell ms-4">
                  User
                </th>
                <th scope="col" className="table-cell">
                  Name
                </th>
                <th scope="col" className="table-cell">
                  Email
                </th>
                <th scope="col" className="table-cell">
                  Phone number
                </th>
                <th scope="col" className="table-cell">
                  Gender
                </th>
                <th scope="col" className="table-cell">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td className="ps-4">{user._id}</td>
                  <td className="px-4">{user.name}</td>
                  <td className="px-4">{user.email}</td>
                  <td className="px-4">{user.phoneNumber}</td>
                  <td className="px-4">{user.gender}</td>
                  <td className="px-4">
                    <button
                      type="button"
                      className="btn btn-success shadow-sm px-4"
                      onClick={() => navigate("/add-user/" + user._id)}
                    >
                      Edit
                    </button>

                    <button
                      type="button"
                      className="btn btn-danger shadow-sm "
                      style={{ marginLeft: "15px" }}
                      onClick={() => handleDelete(user._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Wrapper>
  );
};

export default AllStaff;
