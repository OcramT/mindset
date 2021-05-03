import { REMOVE_USER_PACK,  
        ADD_USER_PACK } from '../actions/user_pack_actions';

const userPacksReducer = (defaultState = {}, action) => {
    Object.freeze(defaultState)
    // let nextState = Object.assign({}, defaultState)

    switch(action.type) {
        case ADD_USER_PACK:
            console.log(action.pack)
            let nextState = Object.assign({}, defaultState, action)
            return nextState
        case REMOVE_USER_PACK:
             
        default:
            return defaultState;
    }

}

export default userPacksReducer;