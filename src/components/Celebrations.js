import React from "react";
import "./start.css";

export default function Celebrations(props) {
  function nextLevel(e) {
    props.nextLevel(e);
  }

  return (
    <div className="center-div">
      <div>
        <img src="/img/celebration.png" alt="commentrator"></img>
      </div>
      <div>
        <p>
          RAZOR SHARP UNITED create history, much to the credit of their manager
          and the young prodigy HAMSUN. The players celebrate late into the
          night. This victory shall be remembered in years to come, as one of
          the greatest underdog stories of all time.
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
