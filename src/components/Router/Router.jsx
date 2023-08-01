import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import { SignupPage } from "../SignupPage/SignupPage";
import { LoginPage } from "../LoginPage/LoginPage";
import { ResponsiveSidebar } from "../ResponsiveSidebar/ResponsiveSidebar";
import { AlternativeNavBar } from "../AlternativeNavBar/AlternativeNavBar";
import { PopUp } from "../PopUp/PopUp";
import { Widget } from "../Widget/Widget";
import { AlternativeLoginPage } from "../AlternativeLoginPage/AlternativeLoginPage";
import { Footer } from "../Footer/Footer";
import { AlternativeSideBar } from "../AlternativeSideBar/AlternativeSideBar";
import { GmailNavBar } from "../GmailNavBar/GmailNavBar";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<SignupPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="responsive-sidebar" element={<ResponsiveSidebar />} />
          <Route path="alternative-navbar" element={<AlternativeNavBar />} />
          <Route path="popup" element={<PopUp />} />
          <Route path="widget" element={<Widget />} />
          <Route path="alternative-login" element={<AlternativeLoginPage />} />
          <Route path="footer" element={<Footer />} />
          <Route path="alternative-sidebar" element={<AlternativeSideBar />} />
          <Route path="gmail-NavBar" element={<GmailNavBar />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
