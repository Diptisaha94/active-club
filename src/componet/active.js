import React from 'react';
import './active.css';
const Active = (props) => {
    console.log(props.menu);
    let activeTime = 0;
    for (const active of props.menu) {
        activeTime =activeTime+ active.time;
    }
    return (
        <div>
            <h4>Activity Details</h4>
            <div className="bg-light d-flex justify-content-between align-items-center mb-4 rounded">
                <p className='active-time'>Active Time</p>
                <p className='time pe-3'>{activeTime}m</p>
            </div>
            <div className="bg-light d-flex justify-content-between align-items-center mb-4 rounded">
                <p className='active-time'>Break Time</p>
                <p className='time pe-3'>200m</p>
            </div>
        </div>
    );
};

export default Active;