import React from 'react';
import ReactPlayer from "react-player";

function Tutorial_Game(props){
    return (
        <div id='about_2_video'>
            <div className='about-image-video'>
                <ReactPlayer url="https://youtu.be/-ZbrxnD-cJY" width='190%'/>
                
            </div>
            <div className='about-text-video'>
                <h2> {props.title} </h2>
                <p> Summary about Python Game tutorial </p>
                
            </div>
        </div>
        
    )
}

export default Tutorial_Game;