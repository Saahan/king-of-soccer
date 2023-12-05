import React from "react";
import "./start.css";

export default function GameOver(props) {
  function nextLevel(e) {
    props.nextLevel(e);
  }

  return (
    <div className="center-div">
      <div>
        <img src="/img/fly.png" alt="commentrator" width={533} height={300}></img>
      </div>
      <div>
        <p>
          It was a chance to create history. But sadly, it was an outcome that
          was predicted by football pundits. RAZOR SHARP UNITED players are
          disheartened, but also proud of the run to the finals. Time to fly
          home.
        </p>
      </div>
      <div
        className="button"
        onClick={() => {
          nextLevel("Welcome");
        }}
      >
        Restart
      </div>
    </div>
  );
}
