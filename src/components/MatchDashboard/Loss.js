import React from "react";
import "./match.css";

export default function Loss(props) {
  function goToMain(e) {
    props.goToMain(e);
  }

  return (
    <div className="center-div">
      <div>
        <img src="/img/referee.png" alt="commentrator"></img>
      </div>
      <div>
        <p>
          "The referee blows the full time whistle. The RAZORs lose by {props.score[1]} goals to {props.score[0]}. What a devastating loss"
        </p>
      </div>
      <div
        className="button"
        onClick={() => {
          goToMain("GameOver");
        }}
      >
        Continue
      </div>
    </div>
  );
}
