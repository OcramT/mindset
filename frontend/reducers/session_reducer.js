import { RECEIVE_CURRENT_USER, 
         LOGOUT_CURRENT_USER } from '../actions/session_actions';

const _nullUser = Object.freeze({ id: null });

const sessionReducer = (defaultState = _nullUser, action) => {
    Object.freeze(defaultState);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return { id: action.currentUser.id };
        case LOGOUT_CURRENT_USER:
            return _nullUser;
        default:
            return defaultState;
    }
}

export default sessionReducer;
