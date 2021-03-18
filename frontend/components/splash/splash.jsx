import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import RightNavBarLinks from '../nav/nav_link';

const Splash = ({ currentUser, logout }) => {

    const sessionStart = () => (
        <div className='nav-bar'>
            <div className='nav-left'>
                <NavLink className='home-nav' to='/'>
                    <div className="logo-text">
                        <span className='logo'>&#11044;</span> mindset
                    </div>
                </NavLink>
            </div>
            
            <div className='nav-right'>
                {/* <Link to='/login' className='login nav-links'>Login</Link> */}
                <RightNavBarLinks />
                <Link to='/signup' className='signup session-button'>Try for free</Link>
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