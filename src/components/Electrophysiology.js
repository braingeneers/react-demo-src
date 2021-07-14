import React from 'react';
import { Route, Link, BrowserRouter, withRouter, useHistory } from "react-router-dom";

function Electrophysiology(props){
    
    let history = useHistory();

    // redirect to research page (for now, might have to change later)
    const details  = () => {
        history.push("/research");
    };

    return (
        <div id='about_2'>
            <div className='about-image'>
                <img src={props.image} alt=''/>
            </div>
            <div className='about-text'>
                <h2> {props.title} </h2>
                <p> Current approaches to electrophysiology have a low throughput of experiments due to manual supervision and expensive equipment. We developed Piphys, an inexpensive open source neurophysiological recording platform that consists of both hardware and software. This standalone system was validated with primary human neurons, reliably collecting real-time neural activity through remote control.</p>
                <Link to="/research">
                    <button onClick={() => details()} > {props.button}  </button>
                </Link>
                
            </div>
           
        </div>
    )
}

export default Electrophysiology;