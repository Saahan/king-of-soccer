import React from "react";
import "./scenarios.css";
import footballMiss from "../../../sounds/football_miss.mp3";
import useSound from "use-sound";

export default function KeeperPunchNeutral(props) {
  function nextEvent(e) {
    props.nextEvent(e);
  }

  const [play] = useSound(footballMiss);

  play();

  return (
    <div className="center-div">
      <img src="/img/keeperpunch.png" alt="goal" width={400} height={300}></img>
      <p className="scenario-p">
        "The keeper punches the ball out of play. Throw in!"
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
