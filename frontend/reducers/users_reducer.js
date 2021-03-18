import {RECEIVE_CURRENT_USER} from '../actions/session_actions';

const dummy = { username: 'User', email: 'user@mail.com', password: 'password123' }

const usersReducer = (defaultState = {dummy}, action) => {
    Object.freeze(defaultState)
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, defaultState, {[action.currentUser.id] : action.currentUser})
        default:
            return defaultState;
    }
}

export default usersReducer;