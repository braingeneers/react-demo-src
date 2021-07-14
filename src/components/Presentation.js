import React from 'react';
import FeatureBox from './FeatureBox';
import featureimage from '../images/partners.png';

function Presentaion() {
    return(
        <div id='presentation'>
            <h1>Sponsers/Partners</h1>
            <div id='features'>
                <div className='a-container'>
                    <FeatureBox image={featureimage} />
                </div>
            </div>
        </div>
    )
}

export default Presentaion;