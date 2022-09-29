import { useEffect, useState } from 'react';
import './break.css';
const Break = () => {
    const  [breaks,setBreak]=useState(0);
    const [times,setTime]=useState(0);
    useEffect(()=>{
        const getTime = localStorage.getItem('Break');
        if(getTime){
            setTime(getTime);
        }else{
            localStorage.setItem('Break',breaks);
        }
    },[breaks])
    const breakTime=(e)=>{
        const newTime = e.target.innerText;
        setBreak(newTime);
        localStorage.setItem('Break',newTime);
    }

    return (
        <div className='mt-5'>
            <h4>Add A Break</h4>
            <div className="d-flex flex-wrap break-time">
                <p onClick={breakTime}>10m</p>
                <p onClick={breakTime}>20m</p>
                <p onClick={breakTime}>30m</p>
                <p onClick={breakTime}>40m</p>
                <p onClick={breakTime}>50m</p>
            </div>
            <div className="bg-light d-flex justify-content-between align-items-center mb-4 rounded">
                <p className='active-time'>Break Time</p>
                <p className='time pe-3'>{times}</p>
            </div>
        </div>
    );
};

export default Break;