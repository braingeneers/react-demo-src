import React from 'react';
import { Route, Link, BrowserRouter, withRouter, useHistory } from "react-router-dom";

function IOT(props){
    
    let history = useHistory();

    // redirect to research page (for now, might have to change later)
    const details  = () => {
        history.push("/research");
    };

    return (
        <div id='about'>
            <div className='about-image'>
                <img src={props.image} alt=''/>
            </div>
            <div className='about-text'>
                <h2> {props.title} </h2>
                <p> We introduce a cloud-based IoT architecture that provides an online environment where researchers can run thousands of cell culture experiments at once. Biology experiments are automated through cloud connected devices to offer scalability, reproducibility, and online monitoring of research. This technology allows studies on cell cultures to be performed at scales far beyond a single lab setting, democratizing access to advanced tissue models and enabling new avenues of research.</p>
                <Link to="/research">
                    <button onClick={() => details()} > {props.button}  </button>
                </Link>
                
            </div>
           
        </div>
    )
}

export default IOT;