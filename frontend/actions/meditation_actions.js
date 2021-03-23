import Meditation from '../components/meditation/meditation';
import * as MeditationApiUtil from '../util/meditation_api_util';

export const RECEIVE_MEDITATION = 'RECEIVE_MEDITATION';
export const RECEIVE_ALL_MEDITATION_IDS = 'RECEIVE_ALL_MEDITATION_IDS';

export const receiveMeditation = meditation => ({
    type: RECEIVE_MEDITATION,
    meditation
})

export const receiveAllMedIds = (allMedIds) => ({
    type: RECEIVE_ALL_MEDITATION_IDS,
    allMedIds
})

export const fetchMeditation = (meditationId) => dispatch => {
    return MeditationApiUtil.fetchMeditation(meditationId)
        .then(meditation => dispatch(receiveMeditation(meditation)))
}

export const fetchAllMedIds = () => dispatch => {
    return MeditationApiUtil.fetchAllMeditationIds()
        .then(allMedIds => (dispatch(receiveAllMedIds(allMedIds))))
}