import React from 'react';
import { useHistory } from "react-router-dom";

function DavidH(props){
    
    let history = useHistory();

    // redirect to research page (for now, might have to change later)
    const details  = () => {
        history.push("/research");
    };

    return (
        <div id='about'>
            <div className='about-image'>
                <img src={props.image} alt=''/>
            </div>
            <div className='about-text'>
                <h2> {props.title} </h2>
                <p></p>
                <a href="https://braingeneers.ucsc.edu/">
                    <button onClick={() => details()} > {props.button}  </button>
                </a>
            </div>
           
        </div>
    )
}

export default DavidH;