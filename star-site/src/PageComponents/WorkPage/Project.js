import React from "react";
import classNames from "classnames";
import { motion } from "framer-motion";
import { GoOctoface } from "react-icons/go";

import weenixStatic from "./images/weenix/weenix_static.png";

import "./Project.css";

const githubBlue = "rgb(16, 162, 245)";

class Project extends React.Component {
  renderImage = () => {
    return (
      <div className="Project-img-container">
        <img className="Project-img" src={weenixStatic}></img>
      </div>
    );
  };

  renderBoard = () => {
    return (
      <div className="Project-board">
        <p className="Project-header">Weenix</p>
        <p className="Project-text">
          Unix-like kernel built as a semester long project for Operating
          Systems (CS167/690)
        </p>
        <a href="https://github.com/brown-cs1690/weenix-2020-shinelikastar">
          <GoOctoface size={30} fill={githubBlue} className="Project-icon" />
        </a>
      </div>
    );
  };

  render() {
    return (
      <div className="Project-container">
        {this.renderImage()}
        {this.renderBoard()}
      </div>
    );
  }
}

export default Project;
