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

export const addUserMed = medId => {
    return $.ajax({
        method: 'POST',
        url: '/api/user/completedmeditations',
        data: {medId}
    })
}

export const removeUserMed = medId => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/user/completedmeditations/${medId}`
    })
}

export const fetchAllUserMeds = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/user/completedmeditations'
    })
}

export const deleteCustomPackMeditation = (medId) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/meditations/${medId}`
    })
}