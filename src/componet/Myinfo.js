import React from 'react';
import './Myinfo.css';
import pic from '../images/IMG_0806.JPG';
import Break from './break';
import Active from './active';
const Myinfo = () => {
    return (
        <div className='info-container'>
            <div className="my-info">
                <img src={pic} alt=""/>
                <h3>Dipti Rani</h3>
            </div>
            <Break></Break>
            <Active></Active>
            <div className="text-center">
            <button className='btn btn-primary text-center'>Activity Completed</button>
            </div>
        </div>
    );
};

export default Myinfo;