import React from 'react';
import ReactPlayer from "react-player";

function Tutorial_Python(props){
    return (
        <div id='about_2_video'>
            <div className='about-image-video'>
                <ReactPlayer url="https://youtu.be/6g2K5VTD2yM" width='190%'/>
                
            </div>
            <div className='about-text-video'>
                <h2> {props.title} </h2>
                <p> We explain how users can write code in WetAI. WetAI provides a robust Jupyter programming environment for data analysis from resulting research. Though we already provide researchers with analytic tools, we encourage you to build and share your own code. This video shows the basics of programming with python in WetAI. It introduces the programming environment and provides tips for writing organized, well explained code. </p>
                
            </div>
        </div>
        
    )
}

export default Tutorial_Python;