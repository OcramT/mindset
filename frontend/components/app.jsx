import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import DashboardContainer from './dashboard/dashboard_container';
import SplashContainer from './splash/splash_container';
import MeditationContainer from './meditation/meditation_container';
import PackContainer from './pack/pack_container';
import DiscoverContainer from './discover/discover_container';
import MeditationShowContainer from './meditation/meditation_show_container';

const App = () => (
    <>
        <Switch>
            <ProtectedRoute exact path='/meditation/info/:medId' component={MeditationShowContainer}/>
            <ProtectedRoute exact path='/packs/meditation/:medId' component={MeditationContainer} />
            <ProtectedRoute exact path='/meditation/:medId' component={MeditationContainer} />
            <ProtectedRoute exact path='/discover' component={DiscoverContainer} />
            <ProtectedRoute exact path='/packs' component={PackContainer} />
            <ProtectedRoute exact path='/packs/:packId' component={PackContainer}/>
            <ProtectedRoute exact path='/packs/:packId' component={PackContainer} />
            <ProtectedRoute exact path="/dashboard" component={DashboardContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path='/' component={SplashContainer}/>
            <Redirect from='*' to='/' />
        </Switch>
    </>
);

export default App;