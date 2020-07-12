import React from "react";
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
    const subheadingsClassName = "Navbar-subheading-container";

    return (
      <React.Fragment>
        <NavbarLink
          key={link.title}
          active={active}
          title={link.title}
        ></NavbarLink>
        <ul className={subheadingsClassName}>
          {link.subheadings &&
            link.subheadings.map((elem, index) => {
              return this.renderNavbar(elem, index);
            })}
        </ul>
      </React.Fragment>
    );
  };

  render() {
    const { config } = this.props;
    const className = "Navbar-container";

    return (
      <ul className={className}>
        {config.map((elem, index) => this.renderNavbar(elem, index))}
      </ul>
    );
  }
}

export default Navbar;
