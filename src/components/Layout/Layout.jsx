import React from "react";
import { Outlet } from "react-router-dom";
import { GlobalNavBar } from "../GlobalNavBar/GlobalNavBar";

export const Layout = () => {
  return (
    <main>
      <GlobalNavBar />
      <Outlet />
    </main>
  );
};
