import * as sessionApiUtil from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveCurrentUser = (currentUser) => ({
    type: RECEIVE_CURRENT_USER,
    currentUser: currentUser
});

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

export const receiveErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors: errors
});

export const signup = (user) => dispatch => {
    return sessionApiUtil.signup(user)
        .then(user => {
            return dispatch(receiveCurrentUser(user))
        },
        error => {
            return dispatch(receiveErrors(error.responseJSON))
        })
};

export const login = (user) => dispatch => {
    return sessionApiUtil.login(user)
        .then(currentUser => {
            return dispatch(receiveCurrentUser(user))
        }, 
        error => {
            return dispatch(receiveErrors(error.responseJSON))
        })
};

export const logout = () => dispatch => {
    return sessionApiUtil.logout()
        .then(() => {
            return dispatch(logoutCurrentUser())
        },
        error => {
            return dispatch(receiveErrors(error.responseJSON))
        })
};



