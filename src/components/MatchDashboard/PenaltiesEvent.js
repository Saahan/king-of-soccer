import React, { useState } from "react";
import "./match.css";
import useSound from "use-sound";
import kick from "../../sounds/ball_kick.mp3";

export default function PenaltiesEvent(props) {
  let initialState = [
    { backgroundColor: "black" },
    { backgroundColor: "black" },
    { backgroundColor: "black" },
    { backgroundColor: "black" },
    { backgroundColor: "black" },
  ];
  const [penColorTeam, setPenColorTeam] = useState(initialState);
  const [penColorOpp, setPenColorOpp] = useState(initialState);
  const [penNum, setPenNum] = useState(0);
  const [penScoredTeam, setPenScoredTeam] = useState(0);
  const [penScoredOpp, setPenScoredOpp] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [buttonText, setButtonText] = useState("Shoot");

  const [play] = useSound(kick);

  function goToMain(e) {
    props.goToMain(e);
  }

  function nextEvent(e) {
    props.nextEvent(e);
  }

  function takePen() {
    if (penNum === 4) setButtonText("Continue");

    if (penNum === 5) {
      if (penScoredTeam > penScoredOpp) {
        goToMain("Celebrations");
      } else if (penScoredTeam < penScoredOpp) {
        goToMain("GameOver");
      } else {
        nextEvent("FinalPenalty");
      }
    }

    play();

    let scored = Math.floor(Math.random() * (2 - 1 + 1)) + 1;

    setPenColorTeam((prevState) => {
      let newState = [...prevState];
      if (scored === 1) {
        newState[penNum] = { backgroundColor: "green" };
        setPenScoredTeam((prevState) => {
          return prevState + 1;
        });
      } else newState[penNum] = { backgroundColor: "red" };
      return newState;
    });

    setTimeout(() => {
      oppositionPen();
      setDisabled(false);
    }, 2000);

    setPenNum((prevState) => {
      return prevState + 1;
    });
  }

  function oppositionPen() {
    let scored = Math.floor(Math.random() * (2 - 1 + 1)) + 1;

    setPenColorOpp((prevState) => {
      let newState = [...prevState];
      if (scored === 1) {
        newState[penNum] = { backgroundColor: "green" };
        setPenScoredOpp((prevState) => {
          return prevState + 1;
        });
      } else newState[penNum] = { backgroundColor: "red" };
      return newState;
    });
  }

  return (
    <div style={{ textAlign: "center" }}>
      <div>
        <div>RAZORS</div>
        <div className="penalty-shot" style={penColorTeam[0]}></div>
        <div className="penalty-shot" style={penColorTeam[1]}></div>
        <div className="penalty-shot" style={penColorTeam[2]}></div>
        <div className="penalty-shot" style={penColorTeam[3]}></div>
        <div className="penalty-shot" style={penColorTeam[4]}></div>
      </div>
      <div>
        <div>TECMO BOYS</div>
        <div className="penalty-shot" style={penColorOpp[0]}></div>
        <div className="penalty-shot" style={penColorOpp[1]}></div>
        <div className="penalty-shot" style={penColorOpp[2]}></div>
        <div className="penalty-shot" style={penColorOpp[3]}></div>
        <div className="penalty-shot" style={penColorOpp[4]}></div>
      </div>
      <button
        className="button pen-btn"
        disabled={disabled}
        onClick={() => {
          setDisabled(true);
          takePen();
        }}
      >
        <span className="pen-text">{buttonText}</span>
      </button>
    </div>
  );
}
