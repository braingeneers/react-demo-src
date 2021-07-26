import React from 'react';
import FeatureBox from './FeatureBox';
import GoogleCloudimage from '../images/googlecloud.png';
import Dockerimage from '../images/docker.png';
import Terraimage from '../images/terra.png';



function PlatformHeader() {
    return (
        <div id='features-platforms'>

            <h1>Platforms</h1>
            <h3> WetAI can be launched on several platforms</h3>
            <div className='a-container'>
                <a href="https://cloud.google.com/why-google-cloud">
                   <FeatureBox image={GoogleCloudimage} />
                </a>
                <a href="https://terra.bio/">
                    <FeatureBox image={Terraimage} />
                </a>
                <a href="https://www.docker.com/company">
                    <FeatureBox image={Dockerimage} />
                </a>
                
            </div>


        </div>
    )
}

export default PlatformHeader;