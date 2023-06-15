import React from "react";
import { Outlet } from "react-router-dom";
import AuthAppBar from "../../components/AuthAppBar"

const Root = () => {
  return (
    <>
      <AuthAppBar></AuthAppBar>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
};

export default Root;
