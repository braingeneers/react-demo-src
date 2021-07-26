import React from 'react';
import { Route, Link, BrowserRouter, withRouter, useHistory } from "react-router-dom";
import ReactPlayer from "react-player";

function Docker(props){
    
    let history = useHistory();

    // redirect to research page (for now, might have to change later)
    const details  = () => {
        history.push("/research");
    };

    return (
        <div id='about'>
            
            <div className='about-image-video'>
                <ReactPlayer url="https://youtu.be/lcQfQRDAMpQ" width='190%'/> 
            </div>
            <div className='about-text'>
                <h2> {props.title} </h2>
                <p> WetAI is a web platform where scientists conduct AI and neuroscience research both in silico and using human neural tissue. Researchers and their code will interact with human cerebral organoids in other cities through an online interface. In addition to managing experiments, WetAI contains infrastructure for analyzing data, sharing code with collaborators, and curating aggregated results. By combining each step of the scientific method into one platform, we will accelerate innovation and promote closer collaboration. 
                <a href="https://github.com/braingeneers/WetAI_Docker"> Set up with GitHub </a>
                <a href="https://hub.docker.com/r/braingeneers/wetai"> Set up with Docker </a>
                
                </p>
                
                
            </div>
           
        </div>
    )
}

export default Docker;