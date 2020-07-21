import React from "react";
import classNames from "classnames";
import { motion, AnimatePresence } from "framer-motion";

import NavbarLink from "./NavbarLink";
import "./Navbar.css";

const listAnimationVariants = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeHeadings: [0, -1],
    };
  }

  handleNavbarLinkHover = (parentIndex, childIndex) => {
    this.setState({
      activeHeadings: [parentIndex, childIndex],
    });
  };

  // handleNavbarLinkHoverOut = () => {
  //   console.log("got here");
  //   const activeParent = this.state.activeHeadings[0];
  //   this.setState({
  //     activeHeadings: [activeParent, -1],
  //   });
  // };

  renderNavbar = (link, parentIndex, childIndex) => {
    const { activeHeadings } = this.state;

    const selectedParent = activeHeadings[0];
    const selectedChild = activeHeadings[1];

    let active;
    if (childIndex === -1) {
      // rendering parent heading
      active = selectedParent === parentIndex;
    } else if (selectedParent === parentIndex) {
      // rendering child heading
      if (activeHeadings[childIndex] === -1) {
        // make first child heading active under active parent
        this.handleNavbarLinkHover(parentIndex, 0);
      } else {
        active = selectedChild === childIndex;
      }
    }

    const subheadingsClass = "Navbar-subheading-container";
    const renderSubheadings = Boolean(
      link.subheadings && activeHeadings[0] === parentIndex
    );

    return (
      <React.Fragment>
        <NavbarLink
          active={active}
          parentIndex={parentIndex}
          childIndex={childIndex}
          title={link.title}
          onNavbarLinkHover={this.handleNavbarLinkHover}
          // onNavbarLinkHoverOut={this.handleNavbarLinkHoverOut}
        ></NavbarLink>

        <motion.ul
          className={subheadingsClass}
          initial="hidden"
          animate="visible"
          variants={listAnimationVariants}
        >
          {renderSubheadings &&
            link.subheadings.map((elem, subindex) => {
              return (
                <AnimatePresence exitBeforeEnter>
                  {this.renderNavbar(elem, parentIndex, subindex)}
                </AnimatePresence>
              );
            })}
        </motion.ul>
      </React.Fragment>
    );
  };

  render() {
    const { config } = this.props;
    const containerClass = classNames("Navbar-container", "Navbar-dropdown");
    const navClass = "Navbar";
    const allNavClass = "Navbar-all-container";

    return (
      <div className={allNavClass}>
        <div className={containerClass}>
          <ul className={navClass}>
            {config.map((elem, index) => this.renderNavbar(elem, index, -1))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
