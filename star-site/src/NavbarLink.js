// @flow
import React from "react";
import classNames from "classnames";

class NavbarLink extends React.Component {
  static defaultProps = {
    active: false
  };

  renderLink = () => {
    const { active } = this.props;
    const className = classNames("Navbar-link", { "--active": active });

    return (
      <li className={className}>
        <a href="#">Fake link</a>
      </li>
    );
  };

  render() {
    return <React.Fragment>{this.renderLink()}</React.Fragment>;
  }
}

export default NavbarLink;
