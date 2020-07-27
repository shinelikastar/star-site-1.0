import React from "react";
import classNames from "classnames";

import Header from "../Header";
import "./WritingPage.css";

class WritingPage extends React.Component {
  render() {
    const headerText = "some things i've written";
    return (
      <React.Fragment>
        {" "}
        <Header text={headerText} />
      </React.Fragment>
    );
  }
}

export default WritingPage;
