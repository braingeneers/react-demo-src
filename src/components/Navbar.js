import React, {useState} from 'react';
import logo from '../images/logo2.png';

function NavBar() {

    const [nav,setNav] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 50) {
            setNav(true);
        } 
        else{
            setNav(false);
        }
    }

    window.addEventListener('scroll', changeBackground);
    return (
        <nav className={nav ? 'nav active' : 'nav'}>
           <a href='/home' className='logo'>
               <img src={logo} alt=''/>
           </a>
           <input type='checkbox' className='menu-btn' id='menu-btn'/>
           <label className='menu-icon' for='menu-btn'>
               <span className='nav-icon'></span>
           </label>
           <ul className='menu'>
               <li><a href='/home' className='active'>Home</a></li>
               <li><a href='/research'>Research</a></li>
               <li><a href='/tutorials'>Tutorials</a></li>
               <li><a href='/quickstart'>Quick Start</a></li>
               <li><a href='/contact'>Get in Contact</a></li>
           </ul>
        </nav>
    )
}

export default NavBar;