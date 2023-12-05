import React from "react";
import "./match.css";

export default function Event1(props) {
  let timeVariable = Math.floor(Math.random() * (25 - 10 + 1)) + 10;
  let eventVariable = Math.floor(Math.random() * 3) + 1;

  function nextEvent(e) {
    let eventNumber = 1;
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

  switch (eventVariable) {
    case 1:
      return (
        <div className="center-div">
          <p>{timeVariable}' - HAMSUN receives a defence-splitting pass, </p>
          <div>
            {" "}
            <img
              src="/img/ballwithyou.png"
              width={500}
              height={300}
              alt="bwy"
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
      );

    case 2:
      return (
        <div className="center-div">
          <p>{timeVariable}' - JONES performs a nutmeg and beats his man!</p>
          <div>
            {" "}
            <img src="/img/dribble.png" width={500} height={300} alt="dr"></img>
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
      );

    case 3:
      return (
        <div className="center-div">
          <p>
          {timeVariable}' - A striker is through towards your goal, this may be a chance to counter!
          </p>
          <div>
            {" "}
            <img
              src="/img/opponentpass.png"
              width={500}
              height={300}
              alt="op"
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
      );

    default:
      return <div>Error!</div>;
  }
}
