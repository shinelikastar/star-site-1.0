// @flow
import React from "react";

import Navbar from "../../Navbar/Navbar";
import config from "../../Navbar/navbar_config";
import girl from "../../assets/diva.png";

import WorkPage from "../WorkPage";
import Footer from "./Footer";
import "./AboutPage.css";

function AboutPage() {
  function renderWelcome() {
    return (
      <header className="App-header">
        <div className="Girl-container">
          <img src={girl} className="Girl-diva" alt="" />
          <div className="Welcome-container">
            <p className="DisplayText">
              hi, it's star{" "}
              <span role="img" aria-label="waving">
                ✌️
              </span>
            </p>
            <p>welcome 2 an online representation of me </p>
          </div>
        </div>
      </header>
    );
  }

  const innerApp = (
    <React.Fragment>
      {renderWelcome()}
      <Navbar config={config} />
      <WorkPage />
      <Footer />
    </React.Fragment>
  );

  return <React.Fragment>{innerApp}</React.Fragment>;
}

export default AboutPage;
