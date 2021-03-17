import React from 'react';
import { Route } from 'react-router-dom';
import SplashContainer from './splash/splash_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute } from '../util/route_util';
import { NavLink, Link } from 'react-router-dom'

const App = () => (
    <div>
        <header>
            <NavLink to='/'>
                <h1>&#11044; Mindset</h1>
            </NavLink>
            <SplashContainer />
        </header>
        <Route path="/" />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </div>
    
);

export default App;