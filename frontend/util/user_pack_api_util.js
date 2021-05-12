export const removeUserPack = (packId) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/user/userpacks/${packId}`
    })
}

export const addUserPack = (packId) => {
    return $.ajax({
        method: 'POST',
        url: `/api/user/userpacks`,
        data: { packId }
    })
}

export const fetchAllUserPacks = () => {
    return $.ajax({
        method: 'GET',
        url: `api/user/userpacks`
    })
}