export const fetchAllMeditationIds = () => {
    return $.ajax({
        method: 'GET',
        url: `/api/meditations`
    })
}

export const fetchMeditation = meditationId => {
    return $.ajax({
        method: 'GET',
        url: `/api/meditations/${meditationId}`
    })
}

export const fetchAllMeds = flag => {
    return $.ajax({
        method: 'GET',
        url: `/api/meditations`,
        data: {flag}
    })
}
