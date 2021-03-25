import {RECEIVE_PACK,
        RECEIVE_ALL_PACKS} from '../actions/pack_actions';

const packsReducer = (defaultState = {}, action) => {
    Object.freeze(defaultState)
    let nextState = Object.assign({}, defaultState)
    switch (action.type) {
        case RECEIVE_PACK:
            return Object.assign({}, nextState, action.pack)
        case RECEIVE_ALL_PACKS:
            return Object.assign({}, nextState, action.packs)
        default:
            return defaultState;
    }
}

export default packsReducer;