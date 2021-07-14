import React from 'react';

function FeatureBox(props) {
    return (
     <div>
        <div className='a-b-img'>
            <img src={props.image}/>
        </div>
        <div className='s-b-text'>
            <h3>{props.title}</h3>
        </div>
        
     </div>
    )
}

export default FeatureBox;