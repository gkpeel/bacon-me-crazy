import React from 'react';

const Image = props => (
    <div className="col-6 col-sm-4 col-md-3 card-container" onClick={() => props.makeGuess(props.id)}>
        <img src={props.image} className="bacon-card-img" alt={props.id} />
    </div>
)

export default Image;