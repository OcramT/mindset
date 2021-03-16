import {RECEIVE_CURRENT_USER, 
        LOGOUT_CURRENT_USER} from '../actions/session_actions';

// const sessionReducer = (defaultState = {id: null}, action) => {
//     Object.freeze(defaultState);
//     let nextState = Object.assign({}, defaultState)
//     switch (action.type) {
//         case RECEIVE_CURRENT_USER:
//             return {id: action.currentUser.id}
//         case LOGOUT_CURRENT_USER:
//             return {id: null}
//         default:
//             return defaultState;
//     }
// }

// export default sessionReducer;

const _nullUser = Object.freeze({
    id: null
});

const sessionReducer = (state = _nullUser, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return { id: action.currentUser.id };
        case LOGOUT_CURRENT_USER:
            return _nullUser;
        default:
            return state;
    }
};

export default sessionReducer;