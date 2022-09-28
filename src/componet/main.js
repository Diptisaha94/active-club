import React, { useEffect, useState } from 'react';
import Card from './card';
import Menu from './Menu';
import './main.css';
const Main = () => {
  const  [cards,setCard]=useState([]);
  const [menu,setMenu]=useState([]);
useEffect(()=>{
    fetch('data.json')
  .then(response => response.json())
  .then(data => setCard(data))
},[]);
const handleToclick =(card)=>{
    const newMenu = [...menu,card];
    setMenu(newMenu);
}
//console.log(cards);
    return (
        <div className='main-container row'>
            <div className="col-lg-8">
                <h1 className='text-bg-info'>My Nav</h1>
                <div className="card-container">
                {
                    cards.map(card=><Card handleToclick={handleToclick} card={card} key={card.id}></Card>)
                }
                </div>
            </div>
            <div className="col-lg-4 menu">
                <Menu menu={menu}></Menu>
            </div>
        </div>
    );
};

export default Main;