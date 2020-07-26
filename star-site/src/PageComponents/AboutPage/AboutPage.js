// @flow
import React from "react";

import Navbar from "../../Navbar/Navbar";
import config from "../../Navbar/navbar_config";
import girl from "../../assets/diva.png";

function AboutPage() {
  const innerApp = (
    <div className="App">
      <header className="App-header">
        <div className="Girl-container">
          <img src={girl} className="Girl-diva" alt="" />
          <div className="Welcome-container">
            <p className="DisplayText">hi, it's star!</p>
            <p>welcome 2 an online representation of me 👋</p>
          </div>
        </div>
        <Navbar config={config}></Navbar>
      </header>
    </div>
  );

  return <React.Fragment>{innerApp}</React.Fragment>;
}

export default AboutPage;
