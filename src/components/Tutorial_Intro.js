import React from 'react';
import ReactPlayer from "react-player";
import { Route, Link, BrowserRouter, withRouter, useHistory } from "react-router-dom";

function Tutorial_Intro(props){

    let history = useHistory();

    // redirect to research page (for now, might have to change later)
    const moreTutorials  = () => {
        history.push("/tutorials");
    }; 

    return (
        <div id='about'>
            <div className='about-image'>
                <ReactPlayer url="https://www.youtube.com/watch?v=J1RwbnOmw3M" width='95%'
          />
                
            </div>
            <div className='about-text-video'>
                <h2> {props.title} </h2>
                <p> Summary about what WetAI is </p>
                <Link to="/tutorials">
                    <button onClick={() => moreTutorials()} > {props.button}  </button>
                </Link>
            </div>
        </div>
        
    )
}

export default Tutorial_Intro;