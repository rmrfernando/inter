import React, { useEffect, useState } from "react";
import Wrapper from "./ProfileStyles";
import axios from "axios";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useAppContext } from "../../context";

const Profile = () => {
  const navigate = useNavigate();
  const { user: userData, setUser } = useAppContext();

  const onEdit = () => {
    navigate("/EditProfile");
  };

  return (
    <Wrapper>
      <div className="container-profile">
        <form className="sub-container-profile shadow" id="container">
          <h1 style={{ fontWeight: "bold" }}>
            {userData?.role[0]?.toUpperCase() + userData?.role?.slice(1)}{" "}
            Profile
          </h1>
          <div style={{ paddingLeft: "20px" }}>
            <div>
              <label className="left">Name</label>
              <label className="right">{userData.name}</label>
            </div>
            <div>
              <label className="left">Email</label>
              <label className="right">{userData.email}</label>
            </div>
            <div>
              <label className="left">Phone number</label>
              <label className="right">{userData.phoneNumber}</label>
            </div>
            <div>
              <label className="left">Address</label>
              <label className="right">{userData.address}</label>
            </div>
            <div>
              <label className="left">Gender</label>
              <label className="right">{userData.gender}</label>
            </div>
            <button
              type="submit"
              className="btn btn-primary shadow-sm "
              onClick={() => onEdit()}
            >
              Edit
            </button>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

export default Profile;
