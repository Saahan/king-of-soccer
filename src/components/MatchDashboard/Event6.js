import React, { useState } from "react";
import "./match.css";

export default function Event3(props) {
  const [imgLoaded, setImgLoaded] = useState(false);

  let timeVariable = Math.floor(Math.random() * (92 - 76 + 1)) + 76;
  let eventVariable = Math.floor(Math.random() * 3) + 1;

  function nextEvent(e) {
    let eventNumber = 6;
    props.nextEvent(e, eventNumber);
  }

  function updateScore(s, c) {
    props.updateScore(s, c);
  }

  function eventRandomizer(pass, fail, neutral) {
    let randomVar = Math.floor(Math.random() * 3) + 1;
    console.log(randomVar);
    if (randomVar === 1) {
      nextEvent(pass);
      updateScore(1, 0);
    } else if (randomVar === 2) {
      nextEvent(fail);
      updateScore(0, 1);
    } else if (randomVar === 3) {
      nextEvent(neutral);
      updateScore(0, 0);
    }
  }

  const img = new Image();
  img.onload = () => {
    setImgLoaded(true);
  };
  img.src =
    "/img/fieldplay.png" && "/img/longshot.png" && "/img/opponentshot.png";

  switch (eventVariable) {
    case 1:
      return (
        imgLoaded === true && (
          <div className="center-div">
            <p>
              {timeVariable}' - Your players gang up on the opponent's defence!
            </p>
            <div>
              {" "}
              <img
                src="/img/fieldplay.png"
                width={500}
                height={300}
                alt="kc"
              ></img>
            </div>
            <div>
              <div
                className="button btn-margin"
                onClick={() => {
                  eventRandomizer("ShotSuccess", "ShotFailure", "ShotNeutral");
                }}
              >
                SHOOT
              </div>
              <div
                className="button btn-margin"
                onClick={() => {
                  eventRandomizer("PassSuccess", "PassFailure", "PassNeutral");
                }}
              >
                PASS
              </div>
              <div
                className="button btn-margin"
                onClick={() => {
                  eventRandomizer(
                    "DribbleSuccess",
                    "DribbleFailure",
                    "DribbleNeutral"
                  );
                }}
              >
                DRIBBLE
              </div>
            </div>
          </div>
        )
      );

    case 2:
      return (
        imgLoaded === true && (
          <div className="center-div">
            <p>{timeVariable}' - A long shot opportunity!</p>
            <div>
              {" "}
              <img
                src="/img/longshot.png"
                width={500}
                height={300}
                alt="kc"
              ></img>
            </div>
            <div>
              <div
                className="button btn-margin"
                onClick={() => {
                  eventRandomizer("ShotSuccess", "ShotFailure", "ShotNeutral");
                }}
              >
                SHOOT
              </div>
              <div
                className="button btn-margin"
                onClick={() => {
                  eventRandomizer("PassSuccess", "PassFailure", "PassNeutral");
                }}
              >
                PASS
              </div>
              <div
                className="button btn-margin"
                onClick={() => {
                  eventRandomizer(
                    "DribbleSuccess",
                    "DribbleFailure",
                    "DribbleNeutral"
                  );
                }}
              >
                DRIBBLE
              </div>
            </div>
          </div>
        )
      );

    case 3:
      return (
        imgLoaded === true && (
          <div className="center-div">
            <p>{timeVariable}' - A winger is ready to shoot!</p>
            <div>
              {" "}
              <img
                src="/img/opponentshot.png"
                width={500}
                height={300}
                alt="def"
              ></img>
            </div>
            <div>
              <div
                className="button btn-margin"
                onClick={() => {
                  eventRandomizer(
                    "SlideTackleSuccess",
                    "SlideTackleFailure",
                    "SlideTackleNeutral"
                  );
                }}
              >
                SLIDE TACKLE
              </div>
              <div
                className="button btn-margin"
                onClick={() => {
                  eventRandomizer(
                    "DoubleUpSuccess",
                    "DoubleUpFailure",
                    "DoubleUpNeutral"
                  );
                }}
              >
                DOUBLE UP
              </div>
              <div
                className="button btn-margin"
                onClick={() => {
                  eventRandomizer("FoulSuccess", "FoulFailure", "FoulNeutral");
                }}
              >
                FOUL HIM
              </div>
            </div>
          </div>
        )
      );

    default:
      return <div>Error!</div>;
  }
}
