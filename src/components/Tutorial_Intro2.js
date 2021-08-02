import React from 'react';
import ReactPlayer from "react-player";
//import { useHistory } from "react-router-dom";

function Tutorial_Intro2(props){

    //let history = useHistory();

    // redirect to research page (for now, might have to change later)
    //const moreTutorials  = () => {
    //    history.push("/tutorials");
    //}; 

    return (
        <div id='about_video'>
            <div className='about-image-video'>
                <ReactPlayer url="https://www.youtube.com/watch?v=J1RwbnOmw3M" width='190%'/>
                
            </div>
            <div className='about-text-video'>
                <h2> {props.title} </h2>
                <p> This video explains what WetAI. Scientists conduct research inside WetAI through the control of wet lab experiments, analysis of resulting data, sharing of scientific findings, and the curation of community datasets. It provides examples of collaborations done on WetAI and presents applications made to aid in research. It also explains how code and sensitive medical data is shared. To learn how to launch Wetai, please visit the [quickstart page](link here). </p>
            </div>
        </div>
        
    )
}

export default Tutorial_Intro2;