import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavBar from './nav/nav_bar';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import DashboardContainer from './dashboard/dashboard_container';
import SplashContainer from './splash/splash_container';

const App = () => (
    <div>
        <NavBar />
        <Switch>
            <ProtectedRoute path="/dashboard" component={DashboardContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute path='/' component={SplashContainer}/>
            {/* <Redirect to="/"/> */}
        </Switch>
    </div>
);

export default App;