import React from 'react';

function Contact(props){
    return (
         <div id='contact'>
             <h3> Get in contact</h3>
             <div className='contact-input'>
                 <input type='email' placeholder='example@gmail.com'/>
                <a href='mailto: melliot1@ucsc.edu'>Contact</a>
             </div>
         </div>

    )

}

export default Contact;