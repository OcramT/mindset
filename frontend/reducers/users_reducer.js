import {RECEIVE_CURRENT_USER} from '../actions/session_actions';
import {ADD_USER_PACK, REMOVE_USER_PACK, FETCH_ALL_USER_PACKS} from '../actions/user_pack_actions';
import {MAKE_CURRENT_MED} from '../actions/meditation_actions';
import { ADD_USER_MED, FETCH_ALL_USER_MEDS} from '../actions/user_med_actions';
import { CREATE_CUSTOM_PACK, RECEIVE_UPDATED_PACK,} from '../actions/pack_actions';
import { DELETE_CUSTOM_PACK_MED, DELETE_CUSTOM_PACK_MED_FORM } from '../actions/meditation_actions'

const usersReducer = (defaultState = {}, action) => {
    Object.freeze(defaultState)
    let nextState = Object.assign({}, defaultState)
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, defaultState, {
                [action.currentUser.id] : action.currentUser
            })
        case FETCH_ALL_USER_PACKS:
            let newPackState = Object.assign({}, nextState, {['userPacks'] : action.allUserPacks.userpacks})
            return newPackState
        case FETCH_ALL_USER_MEDS:
            let newMedState = Object.assign({}, nextState, {['userMeds'] : action.allUserMeds.userMeds})
            return newMedState
        case CREATE_CUSTOM_PACK:
            return Object.assign({}, nextState, nextState['userPacks'].push(action.customPack.pack))
        case ADD_USER_PACK:
            let addedUserPackState = Object.assign({}, nextState, nextState['userPacks'].push(action.userPack))
            return addedUserPackState
        case REMOVE_USER_PACK:
            let intPackId = parseInt(action.packId)
            let newUserPacks = nextState.userPacks.filter(pack => pack.id !== intPackId)
            let removedUserPackState = Object.assign({}, nextState, nextState['userPacks'] = newUserPacks)
            return removedUserPackState
        case MAKE_CURRENT_MED:
            return Object.assign({}, nextState, {['currentUserMed'] : action.med})
        case DELETE_CUSTOM_PACK_MED_FORM:
            debugger
            const newFormMeds = nextState.userPacks[action.packId].medIds.filter((med) => med.id !== action.currentMedId)
            let deleteCustomMedState = Object.assign({}, nextState, nextState.userPacks[action.packId].medIds = newFormMeds)
            return deleteCustomMedState
            // return nextState
        case RECEIVE_UPDATED_PACK:
            debugger
            let packId = action.updatedPack.pack.id
            let meds = action.updatedPack.pack.meds
            nextState.userPacks[packId].medIds = meds
            return nextState
        default:
            return defaultState;
    }
}

export default usersReducer;