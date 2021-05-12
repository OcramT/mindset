import {RECEIVE_PACK,
        RECEIVE_UPDATED_PACK,
        RECEIVE_ALL_PACKS,
        CLEAR_PACK,
        CLEAR_ALL_PACKS} from '../actions/pack_actions';
import { DELETE_CUSTOM_PACK_MED, DELETE_CUSTOM_PACK_MED_FORM} from '../actions/meditation_actions'

const packsReducer = (defaultState = {}, action) => {
    Object.freeze(defaultState)
    let nextState = Object.assign({}, defaultState)
    switch (action.type) {
        case RECEIVE_PACK:
            return nextState['pack'] = action.pack
        case RECEIVE_ALL_PACKS:
            return nextState['packs'] = action.packs
        case RECEIVE_UPDATED_PACK:
            let packId = action.updatedPack.pack.id
            let packToUpdate = nextState['packId']
            let meds = action.updatedPack.pack.meds
            nextState[packId]['medIds'] = meds
            return nextState
        case CLEAR_PACK:
            delete nextState['pack']
            return nextState
        case CLEAR_ALL_PACKS:
            nextState = {}
            return nextState
        case DELETE_CUSTOM_PACK_MED:
            const newMeds = nextState.pack.meds.filter((med) => med.id !== action.currentMedId)
            newNextState = Object.assign({}, nextState, nextState.pack.meds = newMeds)
            return newNextState
        case DELETE_CUSTOM_PACK_MED_FORM:
            const newFormMeds = nextState[action.packId].medIds.filter((med) => med.id !== action.currentMedId)
            let newNextState = Object.assign({}, nextState, nextState[action.packId].medIds = newFormMeds)
            return newNextState
        default:
            return defaultState;
    }
}

export default packsReducer;
