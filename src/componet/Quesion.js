import React from 'react';

const Quesion = () => {
    return (
        <div className='container mt-5'>
           <h3>1. How does react work?</h3>
           <p>React is a JavaScript library developed by Facebook which, among other things, was used to build Instagram.com. Its aim is to allow developers to easily create fast user interfaces for websites and applications alike. The main concept of React. js is virtual DOM.</p> 
           <h3>2.What is defference between props and state?</h3>
           <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this. setState property is used to update the state values in the component.</p>
           <h3>3.What else is useEffect data load useful for?</h3>
           <p>UseEffect use case without data load:</p>
           <ul>
            <li>Running on state change: validating input field</li>
            <li>Running on state change: live filtering</li>
            <li>Running on state change: trigger animation on new array value</li>
            <li>Running on props change: update paragraph list on fetched API data update</li>
           </ul>
        </div>
    );
};

export default Quesion;