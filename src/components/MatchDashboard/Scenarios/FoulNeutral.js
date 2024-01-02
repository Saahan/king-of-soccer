import React, { useState } from "react";
import "./scenarios.css";
import footballMiss from "../../../sounds/football_miss.mp3";
import useSound from "use-sound";

export default function FoulNeutral(props) {
  const [imgLoaded, setImgLoaded] = useState(false);

  function nextEvent(e) {
    props.nextEvent(e);
  }

  const [play] = useSound(footballMiss);

  play();

  const img = new Image();
  img.onload = () => {
    setImgLoaded(true);
  };
  img.src = "/img/foul.png";
  
  return (
    imgLoaded === true && (
      <div className="center-div">
        <img src="/img/foul.png" alt="goal" width={400} height={300}></img>
        <p className="scenario-p">
          "Foul conceded, free-kick in the defensive half for the opposition."
        </p>
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
