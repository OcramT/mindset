import {RECEIVE_CURRENT_USER,
        RECEIVE_SESSION_ERRORS } from '../actions/session_actions';

const sessionErrorsReducer = (defaultState = [], action) => {
    Object.freeze(defaultState);
    let nextState = Object.assign({}, defaultState);
    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            return Object.assign({}, defaultState, action.errors)
        case RECEIVE_CURRENT_USER:
            nextState = []
            return nextState
        default:
            return defaultState;
    }
};

export default sessionErrorsReducer;