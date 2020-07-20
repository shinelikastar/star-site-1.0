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
    const headerClass = classNames("Header", "Header-container");
    const headerText = "some things i've built...";
    return (
      <div className={headerClass}>
        <p className={headerClassText}>{headerText}</p>
      </div>
    );
  };

  renderProjects = () => {
    return project_config.map((project, index) => {
      console.log(project);
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

  render() {
    return (
      <div className="WorkPage-container">
        {this.renderHeader()}
        <div className="Project-all-container">{this.renderProjects()}</div>
        <Navbar config={config}></Navbar>
      </div>
    );
  }
}

export default WorkPage;
