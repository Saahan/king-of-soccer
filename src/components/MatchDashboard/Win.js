import React from "react";
import "./match.css";
import useSound from "use-sound";
import refereeWhistle from "../../sounds/referee_whistle.mp3";

export default function Win(props) {
  function goToMain(e) {
    props.goToMain(e);
  }

  const [play] = useSound(refereeWhistle);

  play();

  return (
    <div className="center-div">
      <div>
        <img src="/img/referee.png" alt="commentrator"></img>
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
  );
}
