import React from 'react';
import './break.css';
const Break = () => {
    return (
        <div>
            <h4>Add A Break</h4>
            <div className="d-flex break-time">
                <p>10m</p>
                <p>20m</p>
                <p>30m</p>
                <p>40m</p>
                <p>50m</p>
            </div>
        </div>
    );
};

export default Break;