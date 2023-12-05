import React from "react";
import "./match.css";

export default function MatchStartScreen (props) {
  function nextEvent(e) {
    props.nextEvent(e);
  }

  return (
    <div className="center-div">
      <img
        src="/img/referee.png"
        width={400}
        height={300}
        className="referee-image"
        alt="referee"
      ></img>
      <p></p>
      <div
        className="button"
        onClick={() => {
          nextEvent("Event1");
        }}
      >
        Kick-Off
      </div>
    </div>
  );
}
