import { useState } from 'react';
import './break.css';
const Break = () => {
    const  [breaks,setBreak]=useState(0);
    const breakTime=(e)=>{
        const newTime = e.target.innerText;
        setBreak(newTime);
    }

    return (
        <div>
            <h4>Add A Break</h4>
            <div className="d-flex break-time">
                <p onClick={breakTime}>10m</p>
                <p onClick={breakTime}>20m</p>
                <p onClick={breakTime}>30m</p>
                <p onClick={breakTime}>40m</p>
                <p onClick={breakTime}>50m</p>
            </div>
            <div className="bg-light d-flex justify-content-between align-items-center mb-4 rounded">
                <p className='active-time'>Break Time</p>
                <p className='time pe-3'>{breaks}</p>
            </div>
        </div>
    );
};

export default Break;