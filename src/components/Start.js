import React from "react";
import "./start.css";

export default function Start(props) {
  function nextLevel(e) {
    props.nextLevel(e);
  }

  return (
    <div className="center-div">
      <div>
        <img src="/img/commentrator.png" alt="commentrator"></img>
      </div>
      <div>
        <p>
          "Welcome to the CHAMPIONS CUP Finals! Can the underdogs RAZOR
          SHARP UNITED beat tested champions TECMO BOYS? HAMSUN of the RAZOR's
          is in great form, primed to create history at this coveted
          competition!"
        </p>
      </div>
      <div
        className="button"
        onClick={() => {
          nextLevel("Prelude");
        }}
      >
        Continue
      </div>
    </div>
  );
}
