import React, { useEffect, useState } from 'react';
import Card from './card';
import Menu from './Menu';
import './main.css';
const Main = () => {
  const  [cards,setCard]=useState([]);
useEffect(()=>{
    fetch('data.json')
  .then(response => response.json())
  .then(data => setCard(data))
},[])
    return (
        <div className='main-container row'>
            <div className="col-lg-8">
                <h1 className='text-bg-info'>My Nav</h1>
                <div className="card-container">
                {
                    cards.map(card=><Card card={card} key={card.id}></Card>)
                }
                </div>
            </div>
            <div className="col-lg-4 menu">
                <Menu></Menu>
            </div>
        </div>
    );
};

export default Main;