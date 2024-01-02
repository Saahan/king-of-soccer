import React, { useState } from "react";
import "./match.css";
import useSound from "use-sound";
import refereeWhistle from "../../sounds/referee_whistle.mp3";

export default function Loss(props) {
  const [imgLoaded, setImgLoaded] = useState(false);

  function goToMain(e) {
    props.goToMain(e);
  }

  const [play] = useSound(refereeWhistle);

  play();

  const img = new Image();
  img.onload = () => {
    setImgLoaded(true);
  };
  img.src = "/img/referee.png";

  return (
    imgLoaded === true && (
      <div className="center-div">
        <div>
          <img src="/img/referee.png" alt="commentrator"></img>
        </div>
        <div>
          <p>
            "The referee blows the full time whistle. The RAZORs lose by{" "}
            {props.score[1]} goals to {props.score[0]}. What a devastating loss"
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
    )
  );
}
