import React from "react";
import Navbar from "./Navbar/Navbar";
import config from "./Navbar/navbar_config";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar config={config}></Navbar>
      </header>
    </div>
  );
}

export default App;
