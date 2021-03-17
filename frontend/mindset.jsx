import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import * as sessionActions from './actions/session_actions'

document.addEventListener('DOMContentLoaded', () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore()
    }
    const rootEl = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, rootEl)
    // window.getState = store.getState;
    // window.dispatch = store.dispatch;
    // window.login = sessionActions.login
    // window.logout = sessionActions.logout
    // window.signup = sessionActions.signup
    // ReactDOM.render(<h1>MindSet</h1>, rootEl);
});