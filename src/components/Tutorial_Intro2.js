import React from 'react';
import ReactPlayer from "react-player";
import { Route, Link, BrowserRouter, withRouter, useHistory } from "react-router-dom";

function Tutorial_Intro2(props){

    let history = useHistory();

    // redirect to research page (for now, might have to change later)
    const moreTutorials  = () => {
        history.push("/tutorials");
    }; 

    return (
        <div id='about_video'>
            <div className='about-image-video'>
                <ReactPlayer url="https://www.youtube.com/watch?v=J1RwbnOmw3M" />
                
            </div>
            <div className='about-text-video'>
                <h2> {props.title} </h2>
                <p> Summary about what WetAI is </p>
            </div>
        </div>
        
    )
}

export default Tutorial_Intro2;