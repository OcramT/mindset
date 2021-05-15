import { merge } from 'lodash';
import {RECEIVE_MEDITATION,
        RECEIVE_ALL_MEDITATION_IDS,
        RECEIVE_ALL_MEDITATIONS} from '../actions/meditation_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

const meditationsReducer = (defaultState = {}, action) => {
    Object.freeze(defaultState)
    // let nextState = Object.assign({}, defaultState)
    let nextState = merge({}, defaultState)
    switch (action.type) {
        case RECEIVE_MEDITATION:
            return Object.assign({}, defaultState, {[action.meditation.id] : action.meditation})
        case RECEIVE_ALL_MEDITATION_IDS:
            // debugger
            const allMeds = action.allMedIds 
            return Object.assign({}, nextState, { medIds : Object.values(allMeds)})
        case RECEIVE_ALL_MEDITATIONS:
            return Object.assign({}, nextState, action.allMeditations )
        case LOGOUT_CURRENT_USER:
            return nextState = {}
        default:
            return defaultState;
    }
}

export default meditationsReducer;