import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import RightNavBarLinks from '../nav/nav_link';

const Splash = ({ currentUser, logout }) => {

    const sessionStart = () => (
        <div class='nav-bar'>

            <div class='nav-left'>
                <NavLink class='home-nav' to='/'>
                    <div class="logo-text">
                        <span class='logo'>&#11044;</span> mindset
                    </div>
                </NavLink>
            </div>
            
            <div class='nav-right'>
                {/* <Link to='/login' class='login nav-links'>Login</Link> */}
                <RightNavBarLinks />
                <Link to='/signup' class='signup session-button'>Try for free</Link>
            </div>

        </div>
    );

    const welcomeMsg = () => (
        <div>
            <p>Welcome, {currentUser.username}</p>
            <button onClick={logout}>Log Out</button>
        </div>
    );

    return currentUser ?  welcomeMsg() : sessionStart();
};

export default Splash;