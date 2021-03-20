import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import RightNavBarLinks from './right_nav_links';
import LeftNavBarLinks from './left_nav_links';
import Greeting from '../session_form/greeting';
import GreetingContainer from '../session_form/greeting_container';
import NavContainer from './nav_container'

const NavBar = ({ currentUser, logout }) => {


       return ( <div className='nav-bar'>
            <div className='nav-left'>
                <NavLink className='home-nav' to='/'>
                   <img className='logo' src={logoText} />
                    {/* <div className="logo-text">
                        <span className='logo'>&#11044;</span> mindset
                    </div> */}
                </NavLink>
                <LeftNavBarLinks />
            </div>
            
            <div className='nav-right'>
                <NavContainer />
                <GreetingContainer />
            </div>
        </div>);

};

export default NavBar;