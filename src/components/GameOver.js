import React, { useState } from "react";
import "./start.css";
import useSound from "use-sound";
import gameOver from "../sounds/game_over.mp3";

export default function GameOver(props) {
  const [imgLoaded, setImgLoaded] = useState(false);

  function nextLevel(e) {
    props.nextLevel(e);
  }

  const [play] = useSound(gameOver);

  play();

  const img = new Image();
  img.onload = () => {
    setImgLoaded(true);
  };
  img.src = "/img/fly.png";

  return (
    imgLoaded === true && (
      <div className="center-div">
        <div>
          <img src="/img/fly.png" alt="fly" width={533} height={300}></img>
        </div>
        <div>
          <p>
            It was a chance to create history. But sadly, it was an outcome that
            was predicted by football pundits. RAZOR SHARP UNITED players are
            disheartened, but also proud of the run to the finals. Time to fly
            home.
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
