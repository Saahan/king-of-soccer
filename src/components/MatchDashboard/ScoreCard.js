import React from 'react';

export default function ScoreCard(props) {
  return (
    <div className='center-div'>
    <p>RAZORS {props.score[0]}-{props.score[1]} {props.opponent}</p>
    </div>
  )
}
