import React from "react";
import "./match.css";

export default function Penalties(props) {
  function nextEvent(e) {
    props.nextEvent(e);
  }

  return (
    <div className="center-div">
      <div>
        <img src="/img/commentrator.png" alt="commentrator"></img>
      </div>
      <div>
        <p>
          "What an exciting game! The score is level at {props.score[0]} - {props.score[1]} at end of the second half and we look forward to the penalties!"
        </p>
      </div>
      <div
        className="button"
        onClick={() => {
          nextEvent("PenaltiesEvent");
        }}
      >
        Start
      </div>
    </div>
  );
}
