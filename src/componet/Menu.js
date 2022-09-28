import React from 'react';
import Myinfo from './Myinfo';

const Menu = (props) => {
    return (
        <div>
           <Myinfo menu={props.menu}></Myinfo> 
        </div>
    );
};

export default Menu;