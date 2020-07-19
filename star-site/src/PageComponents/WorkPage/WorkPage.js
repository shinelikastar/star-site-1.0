import React from "react";
import classNames from "classnames";
import { motion } from "framer-motion";

import Navbar from "../../Navbar/Navbar";
import config from "../../Navbar/navbar_config";
import Project from "./Project";

import "./WorkPage.css";

class WorkPage extends React.Component {
  renderHeader = () => {
    const headerClassText = classNames("Header", "Header-text");
    const headerClass = classNames("Header", "Header-container");
    const headerText = "some things i've built...";
    return (
      <div className={headerClass}>
        <p className={headerClassText}>{headerText}</p>
      </div>
    );
  };

  renderProjects = () => {
    return <Project></Project>;
  };

  render() {
    return (
      <React.Fragment>
        {this.renderHeader()}
        {this.renderProjects()}
        <Navbar config={config}></Navbar>
      </React.Fragment>
    );
  }
}

export default WorkPage;
