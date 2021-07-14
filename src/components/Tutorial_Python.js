import React from 'react';
import ReactPlayer from "react-player";

function Tutorial_Python(props){
    return (
        <div id='about_2_video'>
            <div className='about-image-video'>
                <ReactPlayer url="https://youtu.be/6g2K5VTD2yM"/>
                
            </div>
            <div className='about-text-video'>
                <h2> {props.title} </h2>
                <p> Summary about python tutorial </p>
                
            </div>
        </div>
        
    )
}

export default Tutorial_Python;