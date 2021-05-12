import {RECEIVE_MEDITATION,
        RECEIVE_ALL_MEDITATION_IDS,
        RECEIVE_ALL_MEDITATIONS, 
        DELETE_CUSTOM_PACK_MED_FORM } from '../actions/meditation_actions';

const meditationsReducer = (defaultState = {}, action) => {
    Object.freeze(defaultState)
    let nextState = Object.assign({}, defaultState)
    switch (action.type) {
        case RECEIVE_MEDITATION:
            return Object.assign({}, defaultState, {[action.meditation.id] : action.meditation})
        case RECEIVE_ALL_MEDITATION_IDS:
            const allMeds = action.allMedIds 
            return Object.assign({}, nextState, { medIds : Object.values(allMeds)})
        case RECEIVE_ALL_MEDITATIONS:
            return Object.assign({}, nextState, action.allMeditations )
        default:
            return defaultState;
    }
}

export default meditationsReducer;