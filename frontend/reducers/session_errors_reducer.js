import {RECEIVE_CURRENT_USER,
        RECEIVE_SESSION_ERRORS } from '../actions/session_actions';

const sessionErrorsReducer = (defaultState = [], action) => {
    Object.freeze(defaultState);
    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            return action.errors
        case RECEIVE_CURRENT_USER:
            return []
        default:
            return defaultState;
    }
};

export default sessionErrorsReducer;