import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const RightNavBarLinks = () => (
    <div>
        <ul className='right-nav-bar-links'>
            <li>
                <NavLink to='/'>About</NavLink>
            </li>
            <li>
                <NavLink to='/'>Work</NavLink>
            </li>
            <li>
                <NavLink to='/'>Help</NavLink>
            </li>
            <li>
                <NavLink to='/login'>Login</NavLink>
            </li>
        </ul>
        
    </div>
);

export default RightNavBarLinks;