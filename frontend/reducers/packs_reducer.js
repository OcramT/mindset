import { merge } from 'lodash';
import {RECEIVE_PACK,
        RECEIVE_ALL_PACKS,
        CLEAR_PACK,
        CLEAR_ALL_PACKS} from '../actions/pack_actions';
import { DELETE_CUSTOM_PACK_MED} from '../actions/meditation_actions'
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

const packsReducer = (defaultState = {}, action) => {
    Object.freeze(defaultState)
    // let nextState = Object.assign({}, defaultState)
    let nextState = merge({}, defaultState)
    switch (action.type) {
        case RECEIVE_PACK:
            return nextState['pack'] = action.pack
        case RECEIVE_ALL_PACKS:
            return nextState['packs'] = action.packs
        case CLEAR_PACK:
            delete nextState['pack']
            return nextState
        case CLEAR_ALL_PACKS:
            nextState = {}
            return nextState
        case DELETE_CUSTOM_PACK_MED:
            const newMeds = nextState.pack.meds.filter((med) => med.id !== action.currentMedId)
            let newNextState = Object.assign({}, nextState, nextState.pack.meds = newMeds)
            return newNextState
        case LOGOUT_CURRENT_USER:
            return nextState = {}
        default:
            return defaultState;
    }
}

export default packsReducer;
