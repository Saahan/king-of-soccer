import React, { useState } from "react";
import "./scenarios.css";
import goalCheer from "../../../sounds/goal_cheer.mp3";
import useSound from "use-sound";

export default function KeeperPunchFailure(props) {
  const [imgLoaded, setImgLoaded] = useState(false);

  function nextEvent(e) {
    props.nextEvent(e);
  }

  const [play] = useSound(goalCheer);

  play();

  const img = new Image();
  img.onload = () => {
    setImgLoaded(true);
  };
  img.src = "/img/goalconceded.png";

  return (
    imgLoaded === true && (
      <div className="center-div">
        <img
          src="/img/goalconceded.png"
          alt="goal"
          width={400}
          height={300}
        ></img>
        <p className="scenario-p">
          "The keeper completely misses the punch and the ball rolls into the
          net!"
        </p>
        {props.score[0] === 0 && props.score[1] === 1 && (
          <p className="scenario-p">The RAZORs go behind by a goal!</p>
        )}
        {props.score[0] === props.score[1] && (
          <p className="scenario-p">TECMO BOYS equalize!</p>
        )}
        {props.score[1] - props.score[0] === 1 && props.score[0] !== 0 && (
          <p className="scenario-p">TECMO BOYS take the lead!</p>
        )}
        {props.score[1] - props.score[0] === 2 && (
          <p className="scenario-p">TECMO BOYS double their lead!</p>
        )}
        {props.score[1] - props.score[0] >= 3 && (
          <p className="scenario-p">Thats embarrassing for the RAZORS!</p>
        )}
        <div
          className="button"
          onClick={() => {
            if (props.eventNumber === 1) nextEvent("Event2");
            else if (props.eventNumber === 2) nextEvent("Event3");
            else if (props.eventNumber === 3) nextEvent("Event4");
            else if (props.eventNumber === 4) nextEvent("Event5");
            else if (props.eventNumber === 5) nextEvent("Event6");
            else if (props.eventNumber === 6) {
              //score analysis
              if (props.score[0] > props.score[1]) nextEvent("Win");
              else if (props.score[0] < props.score[1]) nextEvent("Loss");
              else nextEvent("Penalties");
            }
          }}
        >
          Continue
        </div>
      </div>
    )
  );
}
