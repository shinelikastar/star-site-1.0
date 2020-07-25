import React from "react";
import classNames from "classnames";
import { motion } from "framer-motion";
import { FaGithub, FaFolderOpen } from "react-icons/fa";

import weenix from "./images/weenix/weenix_static.png";
import eggs from "./images/eggs/eggs_static.png";
import raisin from "./images/eggs/eggs_static.png";
import maps from "./images/eggs/eggs_static.png";

import "./Project.css";

const iconColor = "rgb(16, 162, 245)";

const PROJECTS = {
  weenix,
  eggs,
  raisin,
  maps,
};

function isEven(n) {
  return n % 2 === 0;
}

class Project extends React.Component {
  tokenizeTitle = (title) => {
    return title.split("-")[0].toLowerCase();
  };

  renderImage = (index) => {
    const { title } = this.props;
    const img = PROJECTS[this.tokenizeTitle(title)];

    const imageClass = classNames("Project-img", {
      "Project-img--left": isEven(index),
    });

    console.log(img);

    return (
      <div className="Project-img-container">
        <img className={imageClass} src={img} alt=""></img>
      </div>
    );
  };

  renderLinks = (links) => {
    const { github, files } = links;
    const iconClassName = "Project-icon";

    const { index } = this.props;
    const align = index === 0 ? "left" : isEven(index) ? "left" : "right";
    console.log(align, index);

    return (
      <motion.div
        style={{ width: 45, float: "left" }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
      >
        {github && (
          <a href={github}>
            <FaGithub size={30} fill={iconColor} className={iconClassName} />
          </a>
        )}

        {files && (
          <a href={files}>
            <FaFolderOpen
              size={30}
              fill={iconColor}
              className={iconClassName}
            ></FaFolderOpen>
          </a>
        )}
      </motion.div>
    );
  };

  renderBoard = (index) => {
    const { title, description, links } = this.props;

    const boardClass = classNames("Project-board", {
      "Project-board--left": isEven(index),
    });
    const headerClass = classNames("Project-header", {
      "Project-header-left": isEven(index),
    });
    const textClass = classNames("Project-text");

    return (
      <div className={boardClass}>
        <p className={headerClass}>{title}</p>
        <p className={textClass}>{description}</p>
        {this.renderLinks(links)}
      </div>
    );
  };

  render() {
    const { index } = this.props;

    return (
      <div className="Project-container">
        {this.renderImage(index)}
        {this.renderBoard(index)}
      </div>
    );
  }
}

export default Project;
