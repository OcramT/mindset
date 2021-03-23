import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
// import NavBar from './nav/nav_bar';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import DashboardContainer from './dashboard/dashboard_container';
import SplashContainer from './splash/splash_container';
import MeditationContainer from './meditation/meditation_container';
import Player from './player/player';

const App = () => (
    <>
        {/* <div className='nav-main hidden'><NavBar /></div> */}
        <div> 
            <Switch>
                <ProtectedRoute path="/meditation" component={MeditationContainer} />
                <ProtectedRoute path="/dashboard" component={DashboardContainer} />
                <AuthRoute exact path="/signup" component={SignupFormContainer} />
                <AuthRoute exact path="/login" component={LoginFormContainer} />
                <AuthRoute path='/' component={SplashContainer}/>
            </Switch>
            <Route path='/meditation/:medId' component={MeditationContainer} />
        </div>
            <Route path='/meditation/:medId/player' component={Player}/>
    </>
);

export default App;