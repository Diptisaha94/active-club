import React from 'react';
import Myinfo from './Myinfo';

const Menu = ({menu}) => {
    return (
        <div>
           <Myinfo menu={menu}></Myinfo> 
        </div>
    );
};

export default Menu;