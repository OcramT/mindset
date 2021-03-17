import React from 'react';
import { Link } from 'react-router-dom';

const Splash = ({ currentUser, logout }) => {

    const sessionStart = () => (
        <div>
            <Link to='/signup'>Sign Up</Link>
            <Link to='/login'>Login</Link>
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