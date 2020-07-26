// @flow
import React from "react";

function Footer() {
  function renderCredits() {
    return (
      <a href="https://github.com/shinelikastar/shinelikastar.github.io">
        Designed and Built by Star Su{" "}
        <span role="img" aria-label="star">
          💫
        </span>
      </a>
    );
  }

  return <footer>{renderCredits()}</footer>;
}

export default Footer;
