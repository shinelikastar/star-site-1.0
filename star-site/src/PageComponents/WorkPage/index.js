import React from "react";
import Project from "./Project";
import project_config from "./project_config";
import Header from "../../shared-components/Header";

import "./WorkPage.css";

class WorkPage extends React.Component {
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
        />
      );
    });
  };

  render() {
    const headerText = "some things i've built...";

    return (
      <React.Fragment>
        <div className="WorkPage-container">
          <Header text={headerText} />
          <div className="Project-all-container">{this.renderProjects()}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default WorkPage;
