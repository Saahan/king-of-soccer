import React, { useState } from "react";
import "./match.css";
import useSound from "use-sound";
import footballCrowd from "../../sounds/football_crowd.mp3";

export default function MatchDashboard(props) {
  const [imgLoaded, setImgLoaded] = useState(false);

  function nextLevel(e, t) {
    props.nextLevel(e, t);
  }

  const [play] = useSound(footballCrowd);

  play();

  const img = new Image();
  img.onload = () => {
    setImgLoaded(true);
  };
  img.src = "/img/field.jpg";

  return (
    imgLoaded === true && (
      <div className="center-div">
        <div>
          <img src="/img/field.jpg" alt="field"></img>
        </div>
        <p className="match-p">RAZOR SHARP UNITED vs {props.opponent}</p>
        <br />
        <p className="match-p-bottom">
          "Its a wild crowd out there, this will be an exciting match! Both the
          teams look fit and ready for it."
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
    )
  );
}
