// @flow
import React from "react";
import "./Header.css";

function Header(props) {
  return (
    <div className="Header-container">
      <p className="Header-text">{props.text}</p>
    </div>
  );
}

export default Header;
