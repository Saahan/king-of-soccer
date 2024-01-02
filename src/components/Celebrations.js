import React, { useState } from "react";
import "./start.css";
import useSound from "use-sound";
import celebrations from "../sounds/football_celebrations.mp3";

export default function Celebrations(props) {
  const [imgLoaded, setImgLoaded] = useState(false);

  function nextLevel(e) {
    props.nextLevel(e);
  }

  const [play] = useSound(celebrations);

  play();

  const img = new Image();
  img.onload = () => {
    setImgLoaded(true);
  };
  img.src = "/img/celebration.png";

  return (
    imgLoaded === true && (
      <div className="center-div">
        <div>
          <img src="/img/celebration.png" alt="celebration"></img>
        </div>
        <div>
          <p>
            RAZOR SHARP UNITED create history, much to the credit of their
            manager and the young prodigy HAMSUN. The players celebrate late
            into the night. This victory shall be remembered in years to come,
            as one of the greatest underdog stories of all time.
          </p>
        </div>
        <div
          className="button"
          onClick={() => {
            nextLevel("Welcome");
          }}
        >
          Restart
        </div>
      </div>
    )
  );
}
