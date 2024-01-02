import React, { useState } from "react";
import "./match.css";
import useSound from "use-sound";
import refereeWhistle from "../../sounds/referee_whistle.mp3";

export default function MatchStartScreen(props) {
  const [imgLoaded, setImgLoaded] = useState(false);

  function nextEvent(e) {
    props.nextEvent(e);
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
        <img
          src="/img/referee.png"
          width={400}
          height={300}
          className="referee-image"
          alt="referee"
        ></img>
        <p></p>
        <div
          className="button"
          onClick={() => {
            nextEvent("Event1");
          }}
        >
          Kick-Off
        </div>
      </div>
    )
  );
}
