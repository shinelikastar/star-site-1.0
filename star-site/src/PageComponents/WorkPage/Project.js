import React from "react";
import classNames from "classnames";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

import weenixStatic from "./images/weenix/weenix_static.png";
import eggsStatic from "./images/eggs/eggs_static.png";

import "./Project.css";

const githubBlue = "rgb(16, 162, 245)";

class Project extends React.Component {
  renderImage = () => {
    const { imgs } = this.props;
    return (
      <div className="Project-img-container">
        <img className="Project-img" src={eggsStatic} alt=""></img>
      </div>
    );
  };

  renderBoard = () => {
    const { title, description, links } = this.props;
    return (
      <div className="Project-board">
        <p className="Project-header">{title}</p>
        <p className="Project-text">{description}</p>
        <motion.div
          style={{ width: 45, float: "right" }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
        >
          <a href={links.github}>
            <FaGithub
              size={30}
              fill={githubBlue}
              className="Project-icon-github"
            />
          </a>
        </motion.div>
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
