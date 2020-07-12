import React from "react";
import logo from "./logo.svg";
import NavbarLink from "./Navbar/NavbarLink";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <NavbarLink></NavbarLink>
        <p>Hi, it's a me star!</p>
      </header>
    </div>
  );
}

export default App;
