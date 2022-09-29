import React from 'react';
import './Myinfo.css';
import pic from '../images/IMG_0806.JPG';
import Break from './break';
import Active from './active';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const Myinfo = (props) => {
    const notify = () => toast("Wow Your Activity Completed!");
    return (
        <div className='info-container'>
            <div className="my-info">
                <img src={pic} alt=""/>
                <h3>Dipti Rani</h3>
            </div>
            <Break></Break>
            <Active menu={props.menu}></Active>
            <div className="text-center">
            <button onClick={notify} className='btn btn-primary text-center'>Activity Completed</button>
            <ToastContainer />
            </div>
        </div>
    );
};

export default Myinfo;