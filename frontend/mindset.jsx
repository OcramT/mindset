import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import * as sessionActions from './actions/session_actions';
import { fetchMeditation, fetchAllMeditationIds } from './util/meditation_api_util';
import { fetchAllMedIds } from './actions/meditation_actions';

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
    window.getState = store.getState;
    window.signup = sessionActions.signup;
    window.dispatch = store.dispatch
    window.fetchMeditation = fetchMeditation;
    window.fetchAllMeditationIds = fetchAllMeditationIds;
    window.fetchAllMedIds = fetchAllMedIds
});