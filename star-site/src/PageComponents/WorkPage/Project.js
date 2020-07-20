import React from "react";
import classNames from "classnames";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

import weenix from "./images/weenix/weenix_static.png";
import eggs from "./images/eggs/eggs_static.png";

import "./Project.css";

const githubBlue = "rgb(16, 162, 245)";

const PROJECTS = {
  weenix,
  eggs,
};

class Project extends React.Component {
  tokenizeTitle = (title) => {
    return title.split("-")[0].toLowerCase();
  };

  renderImage = () => {
    const { title } = this.props;
    const img = PROJECTS[this.tokenizeTitle(title)];
    console.log(img);

    return (
      <div className="Project-img-container">
        <img className="Project-img" src={img} alt=""></img>
      </div>
    );
  };

  renderLinks = (links) => {
    const { github } = links;
    return (
      <motion.div
        style={{ width: 45, float: "right" }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
      >
        <a href={github}>
          <FaGithub
            size={30}
            fill={githubBlue}
            className="Project-icon-github"
          />
        </a>
      </motion.div>
    );
  };

  renderBoard = () => {
    const { title, description, links } = this.props;
    return (
      <div className="Project-board">
        <p className="Project-header">{title}</p>
        <p className="Project-text">{description}</p>
        {this.renderLinks(links)}
      </div>
    );
  };

  render() {
    const { index } = this.props;
    const className = classNames("Project-container", {
      "Project-container-second": index === 1,
    });

    return (
      <div className={className}>
        {this.renderImage()}
        {this.renderBoard()}
      </div>
    );
  }
}

export default Project;
