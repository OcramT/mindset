import {RECEIVE_MEDITATION} from '../actions/meditation_actions';

const meditationsReducer = (defaultState = {}, action) => {
    Object.freeze(defaultState)
    switch (action.type) {
        case RECEIVE_MEDITATION:
            return Object.assign({}, defaultState, {[action.meditation.id] : action.meditation})
        default:
            return defaultState;
    }
}

export default meditationsReducer;