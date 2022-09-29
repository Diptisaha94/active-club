import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faPersonWalking } from '@fortawesome/free-solid-svg-icons';
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
        <div className='main-container row m-0'>
            <div className="col-lg-8 col-md-12">
                <div className=" bg-info pb-4 px-3 pt-5 d-flex align-items-center">
                    <FontAwesomeIcon icon={faPersonWalking} size="2x"></FontAwesomeIcon>
                <h2 className='ms-3'>Today Activity</h2>
                </div>
                <div className="card-container row  gy-3">
                {
                    cards.map(card=><Card handleToclick={handleToclick} card={card} key={card.id}></Card>)
                }
                </div>
            </div>
            <div className="col-lg-4 col-md-12 menu">
                <Menu menu={menu}></Menu>
            </div>
        </div>
    );
};

export default Main;