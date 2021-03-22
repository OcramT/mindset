export const fetchMeditation = meditationId => {
    return $.ajax({
        method: 'GET',
        url: `api/meditations/${meditationId}`
    })
}