// @flow
import React from "react";
import "./DesignNotes.css";
import Header from "../../shared-components/Header";

function DesignNotes() {
  function renderNotes() {
    return (
      <p>
        Space to give a shoutout to all the wonderful things that have
        intersected in the creation of this website.
      </p>
    );
  }

  return (
    <div className="DesignNotes-container">
      <Header text="some thoughts on design 🌿">{renderNotes()}</Header>
    </div>
  );
}

export default DesignNotes;
