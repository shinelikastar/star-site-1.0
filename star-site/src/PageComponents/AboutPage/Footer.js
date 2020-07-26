// @flow
import React from "react";

import "./Footer.css";

function Footer() {
  function renderCredits() {
    return (
      <a
        href="https://github.com/shinelikastar/shinelikastar.github.io"
        className="Footer-credit"
      >
        Designed & Built by Star Su{" "}
        <span role="img" aria-label="star">
          💫
        </span>
      </a>
    );
  }

  return <footer class="Footer">{renderCredits()}</footer>;
}

export default Footer;
