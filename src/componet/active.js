import React from 'react';
import './active.css';
const Active = () => {
    return (
        <div>
            <h4>Activity Details</h4>
            <div className="bg-light d-flex justify-content-between align-items-center mb-4 rounded">
                <p className='active-time'>Active Time</p>
                <p className='time pe-3'>200m</p>
            </div>
            <div className="bg-light d-flex justify-content-between align-items-center mb-4 rounded">
                <p className='active-time'>Active Time</p>
                <p className='time pe-3'>200m</p>
            </div>
        </div>
    );
};

export default Active;