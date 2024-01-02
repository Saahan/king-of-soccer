import React, { useState } from "react";
import "./match.css";
import goalCheer from "../../sounds/goal_cheer.mp3";
import useSound from "use-sound";

export default function FinalPenalty(props) {
  const [imgLoaded, setImgLoaded] = useState(false);

  function goToMain(e) {
    props.goToMain(e);
  }

  const [play] = useSound(goalCheer);

  play();

  const img = new Image();
  img.onload = () => {
    setImgLoaded(true);
  };
  img.src = "/img/pen-miss.png";

  return (
    imgLoaded === true && (
      <div className="center-div">
        <div>
          <img
            src="/img/pen-miss.png"
            alt="commentrator"
            width={600}
            height={300}
          ></img>
        </div>
        <div>
          <p>
            "HAMSUN steps up and calmly slots in his next penalty. And, in a
            moment that feels like a dream, TECMO BOYS' player steps up and
            sends the ball flying wide. RAZOR SHARP UNITED win the finals on
            penalties!!!"
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
