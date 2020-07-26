import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import pointingUp from "../assets/pointing-up.png";

class TopButton extends React.Component {
  handleScroll = (event) => {
    event.preventDefault();
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };

  render() {
    return (
      <button type="button" className="Top-button" onClick={this.handleScroll}>
        <img src={pointingUp} alt="Top button"></img>
      </button>
    );
  }
}

export default TopButton;
