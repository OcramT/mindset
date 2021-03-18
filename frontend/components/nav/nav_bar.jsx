import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import RightNavBarLinks from './right_nav_links';
import Greeting from '../session_form/greeting';
import GreetingContainer from '../session_form/greeting_container';

const NavBar = ({ currentUser, logout }) => {


       return ( <div className='nav-bar'>
            <div className='nav-left'>
                <NavLink className='home-nav' to='/'>
                    <div className="logo-text">
                        <span className='logo'>&#11044;</span> mindset
                    </div>
                </NavLink>
            </div>
            
            <div className='nav-right'>
                <RightNavBarLinks />
                <GreetingContainer />
            </div>
        </div>);

};

export default NavBar;