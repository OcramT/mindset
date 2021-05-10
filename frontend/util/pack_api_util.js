export const fetchAllPacks = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/packs'
    })
}

export const fetchPack = (packId) => {
    return $.ajax({
        method: 'GET',
        url: `api/packs/${packId}`
    })
}

export const createCustomPack = (pack) => {
    return $.ajax({
        method: 'POST',
        url: `/api/packs`,
        data: { pack }
    })
}

export const updateCustomPack = (packId, medId, pack) => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/packs/${packId}`,
        data: { pack, medId }
    })
}

export const fetchCustomPacks = (flag) => {
    return $.ajax({
        method: 'GET',
        url: '/api/packs',
        data: {flag}
    })
}