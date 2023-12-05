import React, { useState } from "react";
import MatchStartScreen from "./MatchStartScreen";
import "./match.css";
import Loading from "../Loading";
import Event1 from "./Event1";
import Event2 from "./Event2";
import Event3 from "./Event3";
import Event4 from "./Event4";
import Event5 from "./Event5";
import Event6 from "./Event6";
import DoubleUpSuccess from "./Scenarios/DoubleUpSuccess";
import DoubleUpFailure from "./Scenarios/DoubleUpFailure";
import DoubleUpNeutral from "./Scenarios/DoubleUpNeutral";
import DribbleSuccess from "./Scenarios/DribbleSuccess";
import DribbleFailure from "./Scenarios/DribbleFailure";
import DribbleNeutral from "./Scenarios/DribbleNeutral";
import FoulSuccess from "./Scenarios/FoulSuccess";
import FoulFailure from "./Scenarios/FoulFailure";
import FoulNeutral from "./Scenarios/FoulNeutral";
import KeeperRushSuccess from "./Scenarios/KeeperRushSuccess";
import KeeperRushFailure from "./Scenarios/KeeperRushFailure";
import KeeperRushNeutral from "./Scenarios/KeeperRushNeutral";
import KeeperStaySuccess from "./Scenarios/KeeperStaySuccess";
import KeeperStayFailure from "./Scenarios/KeeperStayFailure";
import KeeperStayNeutral from "./Scenarios/KeeperStayNeutral";
import KeeperPunchSuccess from "./Scenarios/KeeperPunchSuccess";
import KeeperPunchFailure from "./Scenarios/KeeperPunchFailure";
import KeeperPunchNeutral from "./Scenarios/KeeperPunchNeutral";
import PassSuccess from "./Scenarios/PassSuccess";
import PassFailure from "./Scenarios/PassFailure";
import PassNeutral from "./Scenarios/PassNeutral";
import ShotSuccess from "./Scenarios/ShotSuccess";
import ShotFailure from "./Scenarios/ShotFailure";
import ShotNeutral from "./Scenarios/ShotNeutral";
import SlideTackleSuccess from "./Scenarios/SlideTackleSuccess";
import SlideTackleFailure from "./Scenarios/SlideTackleFailure";
import SlideTackleNeutral from "./Scenarios/SlideTackleNeutral";
import Win from "./Win";
import Loss from "./Loss";
import Penalties from "./Penalties";
import PenaltiesEvent from "./PenaltiesEvent";
import FinalPenalty from "./FinalPenalty";

export default function MatchEvents(props) {
  const [matchEvent, setMatchEvent] = useState();
  const [eventNumber, setEventNumber] = useState(0);

  function nextEvent(e, eventNumber) {
    //e is the match event selector argument
    setMatchEvent("loading"); //change to loading after penalties done
    setTimeout(() => {
      setMatchEvent(e);
      setEventNumber(eventNumber);
    }, 500);
  }

  function updateScore(s, c) {
    props.updateScore(s, c);
  }

  function goToMain(e) {
    props.goToMain(e);
  }

  switch (matchEvent) {
    //case "value":

    case "loading":
      return <Loading />;

    case "Event1":
      return <Event1 nextEvent={nextEvent} updateScore={updateScore} />;

    case "Event2":
      return <Event2 nextEvent={nextEvent} updateScore={updateScore} />;

    case "Event3":
      return <Event3 nextEvent={nextEvent} updateScore={updateScore} />;

    case "Event4":
      return <Event4 nextEvent={nextEvent} updateScore={updateScore} />;

    case "Event5":
      return <Event5 nextEvent={nextEvent} updateScore={updateScore} />;

    case "Event6":
      return <Event6 nextEvent={nextEvent} updateScore={updateScore} />;

    case "Win":
      return (
        <Win nextEvent={nextEvent} score={props.score} goToMain={goToMain} />
      );

    case "Loss":
      return (
        <Loss nextEvent={nextEvent} score={props.score} goToMain={goToMain} />
      );

    case "Penalties":
      return <Penalties nextEvent={nextEvent} score={props.score} />;

    case "FinalPenalty":
      return (
        <FinalPenalty
          nextEvent={nextEvent}
          score={props.score}
          goToMain={goToMain}
        />
      );

    case "PenaltiesEvent":
      return (
        <PenaltiesEvent
          nextEvent={nextEvent}
          score={props.score}
          goToMain={goToMain}
        />
      );
    //-------------------------------------------------------------------------- DOUBLE UP CASES --------------------------------------------------------------------------//
    case "DoubleUpSuccess":
      return (
        <DoubleUpSuccess
          nextEvent={nextEvent}
          eventNumber={eventNumber}
          score={props.score}
        />
      );

    case "DoubleUpFailure":
      return (
        <DoubleUpFailure
          nextEvent={nextEvent}
          eventNumber={eventNumber}
          score={props.score}
        />
      );

    case "DoubleUpNeutral":
      return (
        <DoubleUpNeutral
          nextEvent={nextEvent}
          eventNumber={eventNumber}
          score={props.score}
        />
      );
    //-------------------------------------------------------------------------- DRIBBLE CASES --------------------------------------------------------------------------//
    case "DribbleSuccess":
      return (
        <DribbleSuccess
          nextEvent={nextEvent}
          eventNumber={eventNumber}
          score={props.score}
        />
      );

    case "DribbleFailure":
      return (
        <DribbleFailure
          nextEvent={nextEvent}
          eventNumber={eventNumber}
          score={props.score}
        />
      );

    case "DribbleNeutral":
      return (
        <DribbleNeutral
          nextEvent={nextEvent}
          eventNumber={eventNumber}
          score={props.score}
        />
      );
    //-------------------------------------------------------------------------- FOUL CASES --------------------------------------------------------------------------//
    case "FoulSuccess":
      return (
        <FoulSuccess
          nextEvent={nextEvent}
          eventNumber={eventNumber}
          score={props.score}
        />
      );

    case "FoulFailure":
      return (
        <FoulFailure
          nextEvent={nextEvent}
          eventNumber={eventNumber}
          score={props.score}
        />
      );

    case "FoulNeutral":
      return (
        <FoulNeutral
          nextEvent={nextEvent}
          eventNumber={eventNumber}
          score={props.score}
        />
      );

    //-------------------------------------------------------------------------- KEEPER RUSH CASES --------------------------------------------------------------------------//
    case "KeeperRushSuccess":
      return (
        <KeeperRushSuccess
          nextEvent={nextEvent}
          eventNumber={eventNumber}
          score={props.score}
        />
      );

    case "KeeperRushFailure":
      return (
        <KeeperRushFailure
          nextEvent={nextEvent}
          eventNumber={eventNumber}
          score={props.score}
        />
      );

    case "KeeperRushNeutral":
      return (
        <KeeperRushNeutral
          nextEvent={nextEvent}
          eventNumber={eventNumber}
          score={props.score}
        />
      );

    //-------------------------------------------------------------------------- KEEPER STAY CASES --------------------------------------------------------------------------//
    case "KeeperStaySuccess":
      return (
        <KeeperStaySuccess
          nextEvent={nextEvent}
          eventNumber={eventNumber}
          score={props.score}
        />
      );

    case "KeeperStayFailure":
      return (
        <KeeperStayFailure
          nextEvent={nextEvent}
          eventNumber={eventNumber}
          score={props.score}
        />
      );

    case "KeeperStayNeutral":
      return (
        <KeeperStayNeutral
          nextEvent={nextEvent}
          eventNumber={eventNumber}
          score={props.score}
        />
      );

    //-------------------------------------------------------------------------- KEEPER PUNCH CASES --------------------------------------------------------------------------//
    case "KeeperPunchSuccess":
      return (
        <KeeperPunchSuccess
          nextEvent={nextEvent}
          eventNumber={eventNumber}
          score={props.score}
        />
      );

    case "KeeperPunchFailure":
      return (
        <KeeperPunchFailure
          nextEvent={nextEvent}
          eventNumber={eventNumber}
          score={props.score}
        />
      );

    case "KeeperPunchNeutral":
      return (
        <KeeperPunchNeutral
          nextEvent={nextEvent}
          eventNumber={eventNumber}
          score={props.score}
        />
      );

    //-------------------------------------------------------------------------- PASS CASES --------------------------------------------------------------------------//
    case "PassSuccess":
      return (
        <PassSuccess
          nextEvent={nextEvent}
          eventNumber={eventNumber}
          score={props.score}
        />
      );

    case "PassFailure":
      return (
        <PassFailure
          nextEvent={nextEvent}
          eventNumber={eventNumber}
          score={props.score}
        />
      );

    case "PassNeutral":
      return (
        <PassNeutral
          nextEvent={nextEvent}
          eventNumber={eventNumber}
          score={props.score}
        />
      );

    //-------------------------------------------------------------------------- SHOT CASES --------------------------------------------------------------------------//
    case "ShotSuccess":
      return (
        <ShotSuccess
          nextEvent={nextEvent}
          eventNumber={eventNumber}
          score={props.score}
        />
      );

    case "ShotFailure":
      return (
        <ShotFailure
          nextEvent={nextEvent}
          eventNumber={eventNumber}
          score={props.score}
        />
      );

    case "ShotNeutral":
      return (
        <ShotNeutral
          nextEvent={nextEvent}
          eventNumber={eventNumber}
          score={props.score}
        />
      );

    //-------------------------------------------------------------------------- SLIDE TACKLE CASES --------------------------------------------------------------------------//
    case "SlideTackleSuccess":
      return (
        <SlideTackleSuccess
          nextEvent={nextEvent}
          eventNumber={eventNumber}
          score={props.score}
        />
      );

    case "SlideTackleFailure":
      return (
        <SlideTackleFailure
          nextEvent={nextEvent}
          eventNumber={eventNumber}
          score={props.score}
        />
      );

    case "SlideTackleNeutral":
      return (
        <SlideTackleNeutral
          nextEvent={nextEvent}
          eventNumber={eventNumber}
          score={props.score}
        />
      );

    default:
      return (
        <div className="center-div">
          <MatchStartScreen nextEvent={nextEvent} />
        </div>
      );
  }
}
