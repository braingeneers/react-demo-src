import React from 'react';
import FeatureBox from './FeatureBox';
import Davidimage from '../images/DavidH.png';
import Anton from '../images/Anton.png';
import Wolfgangimage from '../images/Wolfgang.png';
import Tomimage from '../images/Tom.png';
import Keithimage from '../images/Keith.png';


function People() {
    return (
        <div id='features-people'>

            <h1>People</h1>

            <div className='a-container'>
                <a href="https://braingeneers.ucsc.edu/">
                   <FeatureBox image={Davidimage} title="David Haussler"  />
                </a>
                <a href="https://alleninstitute.org/what-we-do/brain-science/about/team/staff-profiles/anton-arkhipov/">
                    <FeatureBox image={Anton}  title="Anton Arkhipov"/>
                </a>
                <a href="https://igi-web.tugraz.at/people/maass/">
                    <FeatureBox image={Wolfgangimage} title="Wolfgang Maass"/>
                </a>
                <a href="https://nowakowski-lab.squarespace.com/">
                    <FeatureBox image={Tomimage} title="Tom Nowakowski"/>
                </a>
                <a href="https://hengenlab.org/">
                    <FeatureBox image={Keithimage} title="Keith Hengen"/>
                </a>
            </div>


        </div>
    )
}

export default People;