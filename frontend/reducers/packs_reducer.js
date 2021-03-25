import {RECEIVE_PACK,
        RECEIVE_ALL_PACKS,
        CLEAR_PACK,
        CLEAR_ALL_PACKS} from '../actions/pack_actions';

const packsReducer = (defaultState = {}, action) => {
    Object.freeze(defaultState)
    let nextState = Object.assign({}, defaultState)
    switch (action.type) {
        case RECEIVE_PACK:
            return nextState['pack'] = action.pack
        case RECEIVE_ALL_PACKS:
            return nextState['packs'] = action.packs
        case CLEAR_PACK:
            delete nextState['pack']
            return nextState
        case CLEAR_ALL_PACKS:
            let newState = Object.assign({}, nextState['packs'] = {})
            return newState
        default:
            return defaultState;
    }
}

export default packsReducer;
