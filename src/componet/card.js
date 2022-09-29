import React from 'react';
import './main.css';

const Card = ({card,handleToclick}) => {
    return (
        <div className='col-lg-4 col-md-4 col-sm-6'>
           <div className="card card-width">
  <img src={card.image} className="card-img-top img-height" alt=""/>
  <div className="card-body">
    <h5 className="card-title">{card.title}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <h6>Time Required: {card.time}m</h6>
    <button onClick={()=>handleToclick(card)} className="btn btn-info">Add to list</button>
  </div>
</div> 
        </div>
    );
};

export default Card;