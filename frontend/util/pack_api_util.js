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

export const fetchCustomPacks = (flag) => {
    return $.ajax({
        method: 'GET',
        url: '/api/packs',
        data: {flag}
    })
}