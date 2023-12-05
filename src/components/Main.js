import React, { useState } from "react";
import Welcome from "./Welcome";
import Loading from "./Loading";
import Start from "./Start";
import Prelude from "./Prelude";
import MatchDashboard from "./MatchDashboard/MatchDashboard";
import Match from "./MatchDashboard/Match";
import Celebrations from "./Celebrations";
import GameOver from "./GameOver";

export default function Main() {
  const [sceneSelect, setSceneSelect] = useState();
  const [opponent, setOpponent] = useState();

  function nextLevel(e, t) {
    //e is the scene selector argument, t is the opponent selector argument in this data coming from child elements
    setSceneSelect("loading");
    setTimeout(() => {
      setSceneSelect(e);
      setOpponent(t);
    }, 500);
  }

  function goToMain(e){
    setSceneSelect("loading");
    setTimeout(() => {
      setSceneSelect(e);
    }, 500);
  }

  switch (sceneSelect) {
    case "loading":
      return <Loading />;

    case "Start":
      return <Start nextLevel={nextLevel} />;

    case "Prelude":
      return <Prelude nextLevel={nextLevel} />;

    case "MatchDashboard":
      return <MatchDashboard nextLevel={nextLevel} opponent={opponent} />;

    case "Match":
      return <Match nextLevel={nextLevel} opponent={opponent} goToMain={goToMain}/>;

    case "Celebrations":
      return <Celebrations nextLevel={nextLevel} />;

    case "GameOver":
      return <GameOver nextLevel={nextLevel} />;

    default:
      return <Welcome nextLevel={nextLevel} />;
  }
}

// style events
// implement penalties (done)
// increase number of events (done)
