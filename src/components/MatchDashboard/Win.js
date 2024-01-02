import React, { useState } from "react";
import "./match.css";
import useSound from "use-sound";
import refereeWhistle from "../../sounds/referee_whistle.mp3";

export default function Win(props) {
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
          <img src="/img/referee.png" alt="referee"></img>
        </div>
        <div>
          <p>
            "The referee blows the full time whistle and the score is{" "}
            {props.score[0]}-{props.score[1]} to the RAZOR's. They have done it!
            They have won the finals!"
          </p>
        </div>
        <div
          className="button"
          onClick={() => {
            goToMain("Celebrations");
          }}
        >
          Continue
        </div>
      </div>
    )
  );
}
