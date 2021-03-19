import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import NavBar from './nav/nav_bar';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import DashboardContainer from './dashboard/dashboard_container';

const App = () => (
    <div>
        <NavBar />
        <Switch>
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <Route path='/dashboard' component={DashboardContainer} />
            <Redirect to="/" />
        </Switch>
    </div>
);

export default App;