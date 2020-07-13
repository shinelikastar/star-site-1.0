import React from "react";
import classNames from "classnames";

import config from "../Navbar/navbar_config";
import NavbarLink from "./NavbarLink";
import "./Navbar.css";

class Navbar extends React.Component {
  static defaultProps = {
    config: config,
    selectedIndex: 0,
  };

  renderNavbar = (link, index) => {
    const { selectedIndex } = this.props;
    const active = selectedIndex === index;
    const subheadingsClass = "Navbar-subheading-container";

    return (
      <React.Fragment>
        <NavbarLink
          key={link.title}
          active={active}
          title={link.title}
        ></NavbarLink>
        <ul className={subheadingsClass}>
          {link.subheadings &&
            link.subheadings.map((elem, subindex) => {
              return this.renderNavbar(elem, subindex + 1);
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
