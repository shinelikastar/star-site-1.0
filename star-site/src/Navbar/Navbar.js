import React from "react";
import classNames from "classnames";

import config from "../Navbar/navbar_config";
import NavbarLink from "./NavbarLink";
import "./Navbar.css";

class Navbar extends React.Component {
  static defaultProps = {
    config: config,
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
    };
  }

  handleNavbarLinkHover = (index) => {
    console.log("hello", index);
  };

  renderNavbar = (link, parentIndex, childIndex) => {
    const { selectedIndex } = this.state;
    const active = selectedIndex === parentIndex;
    const subheadingsClass = "Navbar-subheading-container";

    return (
      <React.Fragment>
        <NavbarLink
          active={active}
          index={parentIndex}
          title={link.title}
          onNavbarLinkHover={this.handleNavbarLinkHover}
        ></NavbarLink>
        <ul className={subheadingsClass}>
          {link.subheadings &&
            link.subheadings.map((elem, subindex) => {
              return this.renderNavbar(elem, parentIndex, subindex);
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
            {config.map((elem, index) => this.renderNavbar(elem, index))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
