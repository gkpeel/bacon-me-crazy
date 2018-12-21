import React from 'react';
import './Scorecard.css';

const Scorecard = (props) => (
    <div className="scorecard fixed-bottom">
        <p>Score: {props.score}</p>
        <h3>{props.response}</h3>
        <p>High Score: {props.topScore}</p>
    </div>
)

export default Scorecard;