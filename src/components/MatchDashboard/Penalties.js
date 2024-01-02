import React, { useState } from "react";
import "./match.css";

export default function Penalties(props) {
  const [imgLoaded, setImgLoaded] = useState(false);

  function nextEvent(e) {
    props.nextEvent(e);
  }

  const img = new Image();
  img.onload = () => {
    setImgLoaded(true);
  };
  img.src = "/img/commentrator.png";

  return (
    imgLoaded === true && (
      <div className="center-div">
        <div>
          <img src="/img/commentrator.png" alt="commentrator"></img>
        </div>
        <div>
          <p>
            "What an exciting game! The score is level at {props.score[0]} -{" "}
            {props.score[1]} at end of the second half and we look forward to
            the penalties!"
          </p>
        </div>
        <div
          className="button"
          onClick={() => {
            nextEvent("PenaltiesEvent");
          }}
        >
          Start
        </div>
      </div>
    )
  );
}
