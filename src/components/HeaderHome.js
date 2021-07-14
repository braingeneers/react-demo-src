import React from 'react';
import { Route, Link, BrowserRouter, withRouter, useHistory } from "react-router-dom";

function HeaderHome(props) {

    let history = useHistory();

    // redirect to research page (for now, might have to change later)
    const learnMore = () => {
        history.push("/research");
    };
    
    return (
        <div id='main'>
             
             <div className='name'>
                 <h1><span>Welcome to WetAI: </span>  </h1>
                 <h2>
                 An online laboratory for Neuroscience and Artifical Intelligence
                 </h2>
                 <a href='/research' className='cv-btn'>Learn More</a>
                 <Link to="/research">
                    <button onClick={() => learnMore()} > {props.button}  </button>
                </Link>
             </div>
        </div>
    )
}

export default HeaderHome;