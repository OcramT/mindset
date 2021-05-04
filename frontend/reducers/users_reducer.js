import {RECEIVE_CURRENT_USER} from '../actions/session_actions';
import {ADD_USER_PACK, FETCH_ALL_USER_PACKS} from '../actions/user_pack_actions';

const usersReducer = (defaultState = {}, action) => {
    Object.freeze(defaultState)
    let nextState = Object.assign({}, defaultState)
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, defaultState, {
                [action.currentUser.id] : action.currentUser
            })
        case FETCH_ALL_USER_PACKS:
            return Object.assign({}, nextState, action.allUserPacks)
        // case ADD_USER_PACK:
        //     return Object.assign({}, defaultState, {userpacks : {[action.userPack.id]: action.userPack}})
        default:
            return defaultState;
    }
}

export default usersReducer;