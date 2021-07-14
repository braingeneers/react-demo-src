import React from 'react';
import { Route, Link, BrowserRouter, withRouter, useHistory } from "react-router-dom";

function Anton(props){
    
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
                <p></p>
                <a href="https://alleninstitute.org/what-we-do/brain-science/about/team/staff-profiles/anton-arkhipov/">
                    <button onClick={() => details()} > {props.button}  </button>
                </a>
            </div>
           
        </div>
    )
}

export default Anton;