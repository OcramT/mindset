import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import * as sessionActions from './actions/session_actions'

document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();
    const rootEl = document.getElementById('root');
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.login = sessionActions.login
    window.logout = sessionActions.logout
    window.signup = sessionActions.signup
    ReactDOM.render(<Root store={store}/>, rootEl)
    // ReactDOM.render(<h1>MindSet</h1>, rootEl);
});