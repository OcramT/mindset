import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import * as sessionApiUtils from './util/session_api_util'

document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();
    const rootEl = document.getElementById('root');
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    ReactDOM.render(<Root store={store}/>, rootEl)
    // window.login = sessionApiUtils.login
    // window.logout = sessionApiUtils.logout
    // window.signup = sessionApiUtils.signup
    // ReactDOM.render(<h1>MindSet</h1>, rootEl);
});