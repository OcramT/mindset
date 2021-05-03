import {RECEIVE_CURRENT_USER} from '../actions/session_actions';

const usersReducer = (defaultState = {}, action) => {
    Object.freeze(defaultState)
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, defaultState, {
                [action.currentUser.id] : action.currentUser
            })
        default:
            return defaultState;
    }
}

export default usersReducer;