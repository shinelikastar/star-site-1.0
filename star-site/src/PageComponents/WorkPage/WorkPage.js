import React from "react";
import classNames from "classnames";
import Navbar from "../../Navbar/Navbar";
import config from "../../Navbar/navbar_config";
import Project from "./Project";
import project_config from "./project_config";

import "./WorkPage.css";

class WorkPage extends React.Component {
  renderHeader = () => {
    const headerClassText = classNames("Header", "Header-text");
    const headerText = "some things i've built...";
    return (
      <div className="Header-container">
        <p className={headerClassText}>{headerText}</p>
      </div>
    );
  };

  renderProjects = () => {
    return project_config.map((project, index) => {
      const { title, description, links, imgs } = project;
      return (
        <Project
          index={index}
          title={title}
          description={description}
          imgs={imgs}
          links={links}
        ></Project>
      );
    });
  };

  enableShim = () => {
    if (document.body && !document.body.classList.contains("WorkPage-shim")) {
      document.body.classList.add("WorkPage-shim");
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="WorkPage-container">
          {this.renderHeader()}
          <div className="Project-all-container">{this.renderProjects()}</div>
          <Navbar config={config}></Navbar>
          {this.enableShim()}
        </div>
      </React.Fragment>
    );
  }
}

export default WorkPage;
