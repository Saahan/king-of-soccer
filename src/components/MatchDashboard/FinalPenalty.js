import React from "react";
import "./match.css";
import goalCheer from "../../sounds/goal_cheer.mp3";
import useSound from "use-sound";

export default function FinalPenalty(props) {
  function goToMain(e) {
    props.goToMain(e);
  }

  const [play] = useSound(goalCheer);

  play();

  return (
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
          moment that feels like a dream, TECMO BOYS' player steps up and sends
          the ball flying wide. RAZOR SHARP UNITED win the finals on
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
  );
}
