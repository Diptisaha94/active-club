import React from 'react';
import './card.css';

const Card = ({card}) => {
    return (
        <div>
           <div className="card card-width">
  <img src={card.image} className="card-img-top img-height" alt=""/>
  <div className="card-body">
    <h5 className="card-title">{card.title}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <h6>Time Required: {card.time}m</h6>
    <button className="btn btn-primary">Add to list</button>
  </div>
</div> 
        </div>
    );
};

export default Card;