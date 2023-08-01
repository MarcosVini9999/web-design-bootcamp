import React from "react";
import { Link } from "react-router-dom";
import "./GlobalNavBar.css";

export const GlobalNavBar = () => {
  const scrollToBottom = () => {
    window.scrollTo({ top: 10000, left: 0, behavior: "instant" });
  };

  return (
    <nav id="navBar">
      <Link to="../" onClick={scrollToBottom} className="buttonNavBar">
        Signup Page
      </Link>
      <Link to="../login" onClick={scrollToBottom} className="buttonNavBar">
        Login Page
      </Link>
      <Link to="../responsive-sidebar" onClick={scrollToBottom} className="buttonNavBar">
        ResponsiveSidebar
      </Link>
      <Link to="../alternative-navbar" onClick={scrollToBottom} className="buttonNavBar">
        alternative-navbar
      </Link>
      <Link to="../popup" onClick={scrollToBottom} className="buttonNavBar">
        popup
      </Link>
      <Link to="../widget" onClick={scrollToBottom} className="buttonNavBar">
        widget
      </Link>
      <Link to="../alternative-login" onClick={scrollToBottom} className="buttonNavBar">
        AlternativeLoginPage
      </Link>
      <Link to="../footer" onClick={scrollToBottom} className="buttonNavBar">
        Footer
      </Link>
      <Link to="../alternative-sidebar" onClick={scrollToBottom} className="buttonNavBar">
        AlternativeSideBar
      </Link>
    </nav>
  );
};
