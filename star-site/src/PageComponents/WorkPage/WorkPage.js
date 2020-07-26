import React from "react";
import classNames from "classnames";
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
      const { title, description, languages, links, imgs } = project;
      return (
        <Project
          index={index}
          title={title}
          description={description}
          imgs={imgs}
          languages={languages}
          links={links}
        ></Project>
      );
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="WorkPage-container">
          {this.renderHeader()}
          <div className="Project-all-container">{this.renderProjects()}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default WorkPage;
