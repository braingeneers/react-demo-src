import React from 'react';
import { Route, Link, BrowserRouter, withRouter, useHistory } from "react-router-dom";

function Research(props){

    let history = useHistory();

    // redirect to research page (for now, might have to change later)
    const learnMore  = () => {
        history.push("/research");
    };

    return (
        <div id='about_2'>
            <div className='about-image'>
                <img src={props.image} alt=''/>
            </div>
            <div className='about-text'>
                <h2> {props.title} </h2>
                <p> Summary about Research.</p>
                <Link to="/research">
                    <button onClick={() => learnMore()} > {props.button}  </button>
                </Link>
            </div>
           
        </div>
    )
}

export default Research;