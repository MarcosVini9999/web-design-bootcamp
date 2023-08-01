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
        <span className="btn-txt">Signup Page</span>
      </Link>
      <Link to="../login" onClick={scrollToBottom} className="buttonNavBar">
        <span className="btn-txt">Login Page</span>
      </Link>
      <Link to="../responsive-sidebar" onClick={scrollToBottom} className="buttonNavBar">
        <span className="btn-txt"></span>Responsive Sidebar
      </Link>
      <Link to="../alternative-navbar" onClick={scrollToBottom} className="buttonNavBar">
        <span className="btn-txt">Alternative navbar</span>
      </Link>
      <Link to="../popup" onClick={scrollToBottom} className="buttonNavBar">
        <span className="btn-txt">Popup</span>
      </Link>
      <Link to="../widget" onClick={scrollToBottom} className="buttonNavBar">
        <span className="btn-txt">Widget</span>
      </Link>
      <Link to="../alternative-login" onClick={scrollToBottom} className="buttonNavBar">
        <span className="btn-txt">Alternative Login Page</span>
      </Link>
      <Link to="../footer" onClick={scrollToBottom} className="buttonNavBar">
        <span className="btn-txt">Footer</span>
      </Link>
      <Link to="../alternative-sidebar" onClick={scrollToBottom} className="buttonNavBar">
        <span className="btn-txt">Instagram SideBar</span>
      </Link>
      <Link to="../gmail-NavBar" onClick={scrollToBottom} className="buttonNavBar">
        <span className="btn-txt">Gmail NavBar</span>
      </Link>
    </nav>
  );
};
