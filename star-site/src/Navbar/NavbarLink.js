// @flow
import React from "react";
import classNames from "classnames";

import "./Navbar.css";

class NavbarLink extends React.Component {
  static defaultProps = {
    active: false,
    title: "",
    index: 0,
  };

  handleHover = (index) => (event) => {
    this.props.onNavbarLinkHover(index);
  };

  renderLink = () => {
    const { active, index, title } = this.props;
    const className = classNames("Navbar-link", {
      "Navbar-link--active": active,
    });

    const link = "#" + title;

    return (
      <li
        className={className}
        key={title}
        onMouseOver={this.handleHover(index)}
      >
        <a href={link}>{title}</a>
      </li>
    );
  };

  render() {
    return <React.Fragment>{this.renderLink()}</React.Fragment>;
  }
}

export default NavbarLink;
