import React from "react";
import "./start.css";

export default function Prelude(props) {
  function nextLevel(e, t) {
    props.nextLevel(e, t);
  }
  return (
    <div className="center-div">
      <div>
        <img
          src="/img/Manager.png"
          width={400}
          height={300}
          alt="manager"
        ></img>
        <img
          src="/img/hamsun.png"
          width={200}
          height={150}
          alt="manager"
          className="image-hamsun"
        ></img>
      </div>
      <p>
        "What you do in this match will be recorded in history. HAMSUN will be
        the focal point of our attack. In defense, I want our full-backs to
        stretch the width of the field, not to allow any space to their wingers!
        THIS IS IT BOYS!"
      </p>
      <div
        className="button"
        onClick={() => {
          nextLevel("MatchDashboard", "TECMO BOYS");
        }}
      >
        Continue
      </div>
    </div>
  );
}
