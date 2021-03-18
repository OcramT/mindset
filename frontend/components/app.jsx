import React from 'react';
import { Route } from 'react-router-dom';
// import NavBarContainer from './session_form/nav/greeting_container';
import NavBar from './nav/nav_bar';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute } from '../util/route_util';
import { Switch, Redirect } from 'react-router-dom';

const App = () => (
    <div>
        <NavBar />
        <Switch>
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <Redirect to="/" />
        </Switch>
    </div>
);

export default App;