export const removeUserPack = (packId) => {
    return $.ajax({
        method: 'DELETE',
        url: `api/user/packs/${packId}`
    })
}

export const addUserPack = (packId) => {
    return $.ajax({
        method: 'POST',
        url: `api/user/packs`,
        data: { pack }
    })
}