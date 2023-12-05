import React from "react";
import "./start.css";

export default function Table(props) {
  function nextLevel(e) {
    props.nextLevel(e);
  }
  return (
    <div className="center-div">
      <table>
        <tbody>
          <tr>
            <td style={{ color: "greenyellow" }}>RAZOR SHARP UNITED</td>
            <td style={{ color: "greenyellow" }}>0 pts.</td>
          </tr>
          <tr>
            <td>THE OTAKUS</td>
            <td>0 pts.</td>
          </tr>
          <tr>
            <td>TECMO BOYS</td>
            <td>0 pts.</td>
          </tr>
        </tbody>
      </table>
      <p>
        "As the teams face off against one another, TECMO BOYS are the
        favourites to win this group and go on to the Semis. The teams will give
        anything to get those valuable 3 points with each win!"
      </p>
      <div
        className="button"
        onClick={() => {
          nextLevel("Prelude");
        }}
      >
        Continue
      </div>
    </div>
  );
}
