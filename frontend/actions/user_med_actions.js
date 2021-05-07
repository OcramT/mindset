import * as MeditationApiUtil from '../util/meditation_api_util';

export const ADD_USER_MED = 'ADD_USER_MED';
export const REMOVE_USER_MED = 'REMOVE_USER_MED';
export const FETCH_ALL_USER_MEDS = 'FETCH_ALL_USER_MEDS';

export const addMed = userMed => ({
    type: ADD_USER_MED,
    userMed
})

export const removeMed = med => ({
    type: REMOVE_USER_MED,
    med
})

export const fetchUserMeds = allUserMeds => ({
    type: FETCH_ALL_USER_MEDS,
    allUserMeds
})

export const addUserMed = medId => dispatch => {
    return MeditationApiUtil.addUserMed(medId)
        .then(medId => dispatch(addMed(medId)))
}

export const removeUserMed = (medId) => dispatch => {
    return MeditationApiUtil.removeUserMed(medId)
        .then(() => dispatch(removeMed()))
}

export const fetchAllUserMeds = () => dispatch => {
    return MeditationApiUtil.fetchAllUserMeds()
        .then(allUserMeds => dispatch(fetchUserMeds(allUserMeds)))
}