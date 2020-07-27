import React from "react";
import Header from "../Header";
import "./WritingPage.css";
import config from "./writing_config";

class WritingPage extends React.Component {
  static defaultProps = {
    archive: config,
  };

  renderLine = (line) => {
    const {
      title,
      publish: { published_by, published_on },
      link,
    } = line;

    return (
      <div className="Writing-line-container">
        <a className="Writing-line--title" href={link}>
          {title}
        </a>
        <p className="Writing-line--publish">
          {published_by} | {published_on}
        </p>
      </div>
    );
  };

  renderArchive = () => {
    const { archive } = this.props;
    console.log(archive);
    return archive.map((elem) => {
      return this.renderLine(elem);
    });
  };

  render() {
    const headerText = "some things i've written";
    return (
      <React.Fragment>
        <Header text={headerText} />
        {this.renderArchive()}
      </React.Fragment>
    );
  }
}

export default WritingPage;
