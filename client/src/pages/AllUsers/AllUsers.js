import React, { useEffect } from "react";
import Wrapper from "./AllUsersStyle";

const AllUsers = () => {
  return (
    <Wrapper>
      <div className="container-profile">
        <div className="button-div">
          <button
            type="button"
            className="btn btn-primary shadow-sm mb-5 px-4"
            // onClick={() => handleAdd()}
          >
            Add
          </button>
        </div>
        <div className="sub-container">
          <table class="table table-hover">
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
              <tr>
                <td className="ps-4">1</td>
                <td className="px-4">Mark Davidson</td>
                <td className="px-4">Otto@gmail.com</td>
                <td className="px-4">0768548965</td>
                <td className="px-4">Male</td>
                <td className="px-4">
                  <button
                    type="button"
                    className="btn btn-success shadow-sm px-4"
                    //   onClick={() => handleEdit(user)}
                  >
                    Edit
                  </button>
                  {/* {userData?.role === "admin" && ( */}
                  <button
                    type="button"
                    className="btn btn-danger shadow-sm "
                    style={{ marginLeft: "15px" }}
                    // onClick={() => handleDelete(user._id)}
                  >
                    Delete
                  </button>
                  {/* )} */}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Wrapper>
  );
};

export default AllUsers;
