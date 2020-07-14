import React from "react";
import classNames from "classnames";
import { AnimatePresence } from "framer-motion";

import NavbarLink from "./NavbarLink";
import "./Navbar.css";

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
        ></NavbarLink>

        <ul className={subheadingsClass}>
          {renderSubheadings &&
            link.subheadings.map((elem, subindex) => {
              return (
                <AnimatePresence exitBeforeEnter>
                  {this.renderNavbar(elem, parentIndex, subindex)}
                </AnimatePresence>
              );
            })}
        </ul>
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
