import React from 'react';
import ReactPlayer from "react-player";

function Tutorial_Widgets(props){
    return (
        <div id='about_video'>
            <div className='about-image-video'>
                 <ReactPlayer url="https://youtu.be/abXuRM0QVD0"/>
                
            </div>
            <div className='about-text-video'>
                <h2> {props.title} </h2>
                <p> Summary about Jupyter widgets tutorial </p>
                
            </div>
        </div>
        
    )
}

export default Tutorial_Widgets;