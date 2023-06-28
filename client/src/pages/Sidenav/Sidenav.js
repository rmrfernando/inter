import React, { useEffect } from "react";
import Wrapper from "./SidenavStyles";

import { Link, useNavigate, NavLink } from "react-router-dom";
import { ImProfile } from "react-icons/im";
import { ImUsers } from "react-icons/im";
import { MdMeetingRoom } from "react-icons/md";
import { LuLogOut } from "react-icons/lu";
import { useAppContext } from "../../context";

const Sidenav = () => {
  const { removeUser, user } = useAppContext();
  const navigate = useNavigate();
  return (
    <Wrapper>
      <div className="menuLists Grid">
        <div className="container">
          <div className="navlinks">
            <h4>Interact</h4>
            <NavLink
              className={({ isActive }) =>
                isActive ? "listItem active" : "listItem"
              }
              to={"/profile"}
            >
              <div className="menuLink flex">
                <ImProfile className="icon" />
                <span className="smallText">Profile</span>
              </div>
            </NavLink>
            {user?.role !== "user" && (
              <NavLink
                to={"/allUsers"}
                className={({ isActive }) =>
                  isActive ? "listItem active" : "listItem"
                }
              >
                <div className="menuLink flex">
                  <ImUsers className="icon" />
                  <span className="smallText">All Users</span>
                </div>
              </NavLink>
            )}
            {user?.role === "admin" && (
              <NavLink
                to={"/allStaff"}
                className={({ isActive }) =>
                  isActive ? "listItem active" : "listItem"
                }
              >
                <div className="menuLink flex">
                  <MdMeetingRoom className="icon" />
                  <span className="smallText">All Staff</span>
                </div>
              </NavLink>
            )}
          </div>
          <button
            className="listItem logout"
            onClick={() => {
              removeUser();
              navigate("/login");
            }}
          >
            <a className="menuLink flex">
              <LuLogOut className="icon" />
              <span className="smallText">Logout</span>
            </a>
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Sidenav;
