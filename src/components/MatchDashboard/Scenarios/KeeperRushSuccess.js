import React from "react";
import "./scenarios.css";
import goalCheer from "../../../sounds/goal_cheer.mp3";
import useSound from "use-sound";

export default function KeeperRushSuccess(props) {
  function nextEvent(e) {
    props.nextEvent(e);
  }

  const [play] = useSound(goalCheer);

  play();

  return (
    <div className="center-div">
      <img src="/img/goalscored.png" alt="goal" width={400} height={300}></img>
      <p className="scenario-p">
        "The keeper goes out of his line and grabs the ball! He plays it upfield
        and few passes more lead to a RAZOR goal!"
      </p>
      {props.score[0] === 1 && props.score[1] === 0 && (
        <p className="scenario-p">1-0 to the RAZORS!!</p>
      )}
      {props.score[0] === 1 && props.score[1] === 1 && (
        <p className="scenario-p">THE RAZORS equalize!!</p>
      )}
      {(props.score[0] -  props.score[1] === 2) && (
        <p className="scenario-p">THE RAZORS double their lead!!</p>
      )}
      {(props.score[0] -  props.score[1] >= 3) && (
        <p className="scenario-p">THE RAZORS are utterly dominant!!</p>
      )}
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
