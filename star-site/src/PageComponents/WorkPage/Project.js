import React from "react";
import classNames from "classnames";
import { motion } from "framer-motion";

import weenixStatic from "./images/weenix/weenix_static.png";

import "./Project.css";

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
        <p>
          Unix-like kernel built as a semester long project for Operating
          Systesm (CS167/690)
        </p>
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
