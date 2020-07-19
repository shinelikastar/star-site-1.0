import React from "react";
import classNames from "classnames";
import { motion } from "framer-motion";

import Navbar from "../../Navbar/Navbar";
import config from "../../Navbar/navbar_config";

import "./WorkPage.css";

class WorkPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div>Hello!</div>
        <Navbar config={config}></Navbar>
      </React.Fragment>
    );
  }
}

export default WorkPage;
