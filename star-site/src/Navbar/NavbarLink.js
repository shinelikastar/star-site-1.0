// @flow
import React from "react";
import classNames from "classnames";
import "./Navbar.css";

class NavbarLink extends React.Component {
  static defaultProps = {
    active: false,
    title: "",
  };

  renderLink = () => {
    const { active, title } = this.props;
    const className = classNames("Navbar-link", {
      "Navbar-link--active": active,
    });

    const link = "#" + title;

    return (
      <li className={className} key={title}>
        <a href={link}>{title}</a>
      </li>
    );
  };

  render() {
    return <React.Fragment>{this.renderLink()}</React.Fragment>;
  }
}

export default NavbarLink;
