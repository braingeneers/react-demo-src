import React, {useState} from 'react';
import logo from '../images/logo2.png';
import {NavLink} from 'react-router-dom';

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
              

               <li><NavLink exact activeClassName="active" to='/home' >Home</NavLink></li>
               <li><NavLink activeClassName="active" to='/research'>Research</NavLink></li>
                <li><NavLink activeClassName="active" to='/tutorials'>Tutorials</NavLink></li>
                <li><NavLink activeClassName="active" to='/quickstart'>Quick Start</NavLink></li>
                <li><NavLink activeClassName="active" to='/contact'>Get in Contact</NavLink></li>
               
           </ul>
        </nav>
    )
}

export default NavBar;