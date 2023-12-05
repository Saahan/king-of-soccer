import React, { useState } from "react";
import "./match.css";
import ScoreCard from "./ScoreCard";
import MatchEvents from "./MatchEvents";

export default function Match(props) {
  const [score, setScore] = useState([0, 0]);

  function updateScore (s, c) {
    setScore((prevState) => [prevState[0] + s, prevState[1] + c]);
  }

  function goToMain(e){
    props.goToMain(e);
  }
  //props.opponent = opponent variable
  return (
    <div>
      <ScoreCard score={score} opponent={props.opponent}/>
      <MatchEvents updateScore={updateScore} score={score} goToMain={goToMain}/>
    </div>
  );
}
