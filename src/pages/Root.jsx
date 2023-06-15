import React from "react";
import { Outlet } from "react-router-dom";
import ResponsiveAppBar from "../components/ResponsiveAppBar"
import AuthAppBar from "../components/AuthAppBar";

const Root = () => {
  return (
    <>
      <ResponsiveAppBar ></ResponsiveAppBar>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
};

export default Root;
