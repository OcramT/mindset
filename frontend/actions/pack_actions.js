import * as PackApiUtil from '../util/pack_api_util';

export const RECEIVE_PACK = 'RECEIVE_PACK';
export const RECEIVE_ALL_PACKS = 'RECEIVE_ALL_PACKS';
export const CLEAR_PACK = 'CLEAR_PACK';
export const CLEAR_ALL_PACKS = 'CLEAR_ALL_PACKS';

export const receivePack = pack => ({
    type: RECEIVE_PACK,
    pack
})

export const receiveAllPacks = packs => ({
    type: RECEIVE_ALL_PACKS,
    packs
})

export const clearPack = pack => ({
    type: CLEAR_PACK,
    pack
})

export const clearAllPacks = packs => ({
    type: CLEAR_ALL_PACKS,
    packs
})

export const fetchPack = (packId) => dispatch => {
    return PackApiUtil.fetchPack(packId)
        .then(pack => dispatch(receivePack(pack)))
}

export const fetchAllPacks = () => dispatch => {
    return PackApiUtil.fetchAllPacks()
        .then(allPacks => dispatch(receiveAllPacks(allPacks)))
}