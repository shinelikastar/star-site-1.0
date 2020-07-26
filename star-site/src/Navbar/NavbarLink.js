// @flow
import React from "react";
import classNames from "classnames";
import { motion } from "framer-motion";

import "./Navbar.css";

class NavbarLink extends React.Component {
  static defaultProps = {
    active: false,
    title: "",
    parentIndex: 0,
    childIndex: 0,
  };

  handleHover = (parentIndex, childIndex) => (event) => {
    event.preventDefault();
    this.props.onNavbarLinkHover(parentIndex, childIndex);
  };

  handleHoverOut = () => (event) => {
    event.preventDefault();
  };

  renderLink = () => {
    const { active, parentIndex, childIndex, title } = this.props;
    const className = classNames("Navbar-link", {
      "Navbar-link--active": active,
    });

    const link = "/" + title;
    const linkAnimationVariants = {
      visible: { opacity: 1, y: 0 },
      hidden: { opacity: 0, y: -40 },
      transition: { ease: "easeInOut", duration: 0.25 },
    };

    return (
      <motion.li
        className={className}
        key={title}
        onMouseOver={this.handleHover(parentIndex, childIndex)}
        onMouseOut={this.handleHoverOut}
        variants={linkAnimationVariants}
      >
        <a href={link}>{title}</a>
      </motion.li>
    );
  };

  render() {
    return <React.Fragment>{this.renderLink()}</React.Fragment>;
  }
}

export default NavbarLink;
