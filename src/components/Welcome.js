import React from "react";
import "./welcome.css";

export default function Welcome(props) {
  function nextLevel(e) {
    props.nextLevel(e);
  }

  return (
    <div className="center-div">
      <h1>KING OF SOCCER</h1>
      <h2>-A SOCCER STORY-</h2>
      <div
        className="button"
        onClick={() => {
          nextLevel("Start");
        }}
      >
        Start
      </div>
    </div>
  );
}
