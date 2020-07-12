import React from "react";
import Navbar from "./Navbar/Navbar";
import config from "./Navbar/navbar_config";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar config={config} selectedIndex={0}></Navbar>
        {/* <p>Hi, it's a me star!</p> */}
      </header>
    </div>
  );
}

export default App;
