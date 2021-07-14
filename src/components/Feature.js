import React from 'react';
import FeatureBox from './FeatureBox';
import sponser1 from '../images/chanzuckbiohub.jpeg';
import sponser2 from '../images/eande.png';
import sponser3 from '../images/sfari.jpeg';
import sponser4 from '../images/schmidt.png';
import sponser5 from '../images/nindhs.png';
import sponser6 from '../images/ninds.jpeg';
import sponser7 from '../images/b&b.jpeg';
import sponser8 from '../images/mcd.png';
import sponser9 from '../images/hbp.jpeg';
import sponser10 from '../images/bbp.png';
import collab1 from '../images/ucsc.png';
import collab2 from '../images/ucsf.png';
import collab3 from '../images/washu.png';
import collab4 from '../images/allen.png';
import collab5 from '../images/tugraz.png';

function Feature() {
    return (
        <div id='features'>

            <h1>Collaborators</h1>
            <br></br>
            <br></br>
            <div className='a-container'>
                <a href="https://ucscgenomics.soe.ucsc.edu/">
                   <FeatureBox image={collab1}  />
                </a>
                <a href="https://medicine.ucsf.edu/">
                    <FeatureBox image={collab2} />
                </a>
                <a href="https://wustl.edu/">
                    <FeatureBox image={collab3} />
                </a>
                <a href="https://alleninstitute.org/what-we-do/brain-science/">
                    <FeatureBox image={collab4} />
                </a>
                <a href="https://www.tugraz.at/home/">
                    <FeatureBox image={collab5} />
                </a>
            </div>

            <h1>Sponsors</h1>
            <br></br>
            <br></br>
            <div className='a-container'>
                <a href="https://www.czbiohub.org/">
                    <FeatureBox image={sponser1} />
                </a> 
                <a href="https://broadfoundation.org/">
                    <FeatureBox image={sponser2} />
                </a>
                <a href="https://www.sfari.org/">
                    <FeatureBox image={sponser3} />
                </a>
                <a href="https://schmidtfutures.com/">
                    <FeatureBox image={sponser4} />
                </a>
                <a href="https://www.ninds.nih.gov/">
                    <FeatureBox image={sponser5} />
                </a>       
            </div>

            <div className='a-container'>

                <a href="https://www.nih.gov/">
                    <FeatureBox image={sponser6} />
                </a>
                <a href="https://www.bbrfoundation.org/">
                    <FeatureBox image={sponser7} />
                </a>
                <a href="https://sites.wustl.edu/systemsneuroscience/">
                    <FeatureBox image={sponser8} />
                </a>
                <a href="https://www.humanbrainproject.eu/en/">
                    <FeatureBox image={sponser9} />
                </a>
                <a href="https://www.epfl.ch/research/domains/bluebrain/">
                    <FeatureBox image={sponser10} />
                </a>
        
            </div>

        </div>
    )
}

export default Feature;