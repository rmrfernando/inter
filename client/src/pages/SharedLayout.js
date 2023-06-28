import React from "react";
import { Outlet } from "react-router-dom";
import Sidenav from "./SideNav/Sidenav";

const SharedLayout = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "auto 1fr",
      }}
    >
      <Sidenav />
      <Outlet />
    </div>
  );
};

export default SharedLayout;
