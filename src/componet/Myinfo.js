import React from 'react';
import './Myinfo.css';
import pic from '../images/IMG_0806.JPG';
import Break from './break';
import Active from './active';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const Myinfo = ({menu}) => {
    const notify = () => toast("Wow Your Activity Completed!");
    return (
        <div className='info-container'>
            <div className="my-info">
                <img src={pic} alt=""/>
                <h3>Dipti Rani</h3>
            </div>
            <div className="my-details d-flex align-items-center justify-content-between bg-light px-4 mt-4 rounded py-2">
                <div className="">
                    <h4>50<span>kg</span></h4>
                    <h4>Weight</h4>
                </div>
                <div className="">
                    <h4>5.2</h4>
                    <h4>Height</h4>
                </div>
                <div className="">
                    <h4>25<span>yrs</span></h4>
                    <h4>Age</h4>
                </div>
            </div>
            <Break></Break>
            <Active menu={menu}></Active>
            <div className="text-center">
            <button onClick={notify} className='btn btn-info text-center'>Activity Completed</button>
            <ToastContainer />
            </div>
        </div>
    );
};

export default Myinfo;