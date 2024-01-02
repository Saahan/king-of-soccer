import React from "react";
import "./match.css";
import useSound from "use-sound";
import footballCrowd from "../../sounds/football_crowd.mp3";

export default function MatchDashboard(props) {
  function nextLevel(e, t) {
    props.nextLevel(e, t);
  }

  const [play] = useSound(footballCrowd);

  play();

  return (
    <div className="center-div">
      <div>
        <img src="/img/field.jpg" alt="field"></img>
      </div>
      <p className="match-p">RAZOR SHARP UNITED vs {props.opponent}</p>
      <br />
      <p className="match-p-bottom">
        "Its a wild crowd out there, this will be an exciting match! Both the teams look fit and ready for it."
      </p>
      <div
        className="button"
        onClick={() => {
          nextLevel("Match", props.opponent);
        }}
      >
        Continue
      </div>
    </div>
  );
}
