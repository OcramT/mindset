import * as MeditationApiUtil from '../util/meditation_api_util';

export const RECEIVE_MEDITATION = 'RECEIVE_MEDITATION';

const receiveMeditation = meditation => ({
    type: RECEIVE_MEDITATION,
    meditation
})

export const fetchMeditation = (meditationId) => dispatch => {
    return MeditationApiUtil.fetchMeditation(meditationId)
        .then(meditation => dispatch(receiveMeditation(meditation)))
}