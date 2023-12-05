import React from "react";
import "./scenarios.css";

export default function KeeperRushNeutral(props) {
  function nextEvent(e) {
    props.nextEvent(e);
  }

  return (
    <div className="center-div">
      <img src="/img/save.png" alt="goal" width={400} height={300}></img>
      <p className="scenario-p">
        "Keeper is out of his line and kicks the ball out of play before the striker could respond. Throw in!"
      </p>
      <div
        className="button"
        onClick={() => {
          if (props.eventNumber === 1) nextEvent("Event2");
          else if (props.eventNumber === 2) nextEvent("Event3");
          else if (props.eventNumber === 3) nextEvent("Event4");
          else if (props.eventNumber === 4) nextEvent("Event5");
          else if (props.eventNumber === 5) nextEvent("Event6");
          else if (props.eventNumber === 6) {                   //score analysis
            if (props.score[0] > props.score[1]) nextEvent("Win");
            else if (props.score[0] < props.score[1]) nextEvent("Loss");
            else nextEvent("Penalties");
          }
        }}
      >
        Continue
      </div>
    </div>
  );
}