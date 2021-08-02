import React from 'react';
import {Link,useHistory } from "react-router-dom";

function OnlineLab(props){
    
    let history = useHistory();

    // redirect to research page (for now, might have to change later)
    const details  = () => {
        history.push("/research");
    };

    return (
        <div id='about_paper'>
            <div className='about-image'>
                <img src={props.image} alt=''/>
            </div>
            <div className='about-text'>
                <h2> {props.title} </h2>
                <p> We propose a community-driven initiative to develop tools and algorithms that take advantage of the enormous advances in cerebral organoids and machine learning. We introduce an open web platform, WetAI, where researchers around the world remotely conduct hybrid wet lab and machine learning experiments solely through a computer interface that controls electrophysiological stimulation through closed-loop feedback systems. Science conducted and shared on this organoid-as-a-service platform promises a radically new opportunity to model neural plasticity and decipher whole-brain processes.</p>
                <Link to="/research">
                    <button onClick={() => details()} > {props.button}  </button>
                </Link>
                
            </div>
           
        </div>
    )
}

export default OnlineLab;