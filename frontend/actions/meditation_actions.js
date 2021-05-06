import Meditation from '../components/meditation/meditation';
import * as MeditationApiUtil from '../util/meditation_api_util';

export const RECEIVE_MEDITATION = 'RECEIVE_MEDITATION';
export const RECEIVE_ALL_MEDITATION_IDS = 'RECEIVE_ALL_MEDITATION_IDS';
export const RECEIVE_ALL_MEDITATIONS = 'RECEIVE_ALL_MEDITATIONS';
export const MAKE_CURRENT_MED = 'MAKE_CURRENT_MED';

export const receiveMeditation = meditation => ({
    type: RECEIVE_MEDITATION,
    meditation
})

export const receiveAllMedIds = (allMedIds) => ({
    type: RECEIVE_ALL_MEDITATION_IDS,
    allMedIds
})

export const receiveAllMeditations = (allMeditations) => ({
    type: RECEIVE_ALL_MEDITATIONS,
    allMeditations
})

export const makeCurrentMed = (med) => ({
    type: MAKE_CURRENT_MED,
    med
})

export const fetchMeditation = (meditationId) => dispatch => {
    return MeditationApiUtil.fetchMeditation(meditationId)
        .then(meditation => dispatch(receiveMeditation(meditation)))
}

export const fetchAllMedIds = () => dispatch => {
    return MeditationApiUtil.fetchAllMeditationIds()
        .then(allMedIds => (dispatch(receiveAllMedIds(allMedIds))))
}

export const fetchAllMeditations = (meditationIds) => dispatch => {
    return MeditationApiUtil.fetchMeditation(meditationIds)
        .then(allMeditations => dispatch(receiveAllMeditations(allMeditations)))
}