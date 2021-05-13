import * as PackApiUtil from '../util/pack_api_util';

export const RECEIVE_PACK = 'RECEIVE_PACK';
export const RECEIVE_ALL_PACKS = 'RECEIVE_ALL_PACKS';
export const CLEAR_PACK = 'CLEAR_PACK';
export const CLEAR_ALL_PACKS = 'CLEAR_ALL_PACKS';
export const CREATE_CUSTOM_PACK = 'CREATE_CUSTOM_PACK';
export const DELETE_CUSTOM_PACK = 'DELETE_CUSTOM_PACK';
export const RECEIVE_UPDATED_PACK = 'RECEIVE_UPDATED_PACK';

export const receivePack = pack => ({
    type: RECEIVE_PACK,
    pack
})

export const receiveUpdatedPack = updatedPack => ({
    type: RECEIVE_UPDATED_PACK,
    updatedPack
})

export const receiveAllPacks = packs => ({
    type: RECEIVE_ALL_PACKS,
    packs
})

export const clearPack = pack => ({
    type: CLEAR_PACK,
    pack
})

export const clearAllPacks = () => ({
    type: CLEAR_ALL_PACKS,
})

export const deletePack = customPack => ({
    type: DELETE_CUSTOM_PACK,
    customPack
})

export const receiveNewCustomPack = customPack => ({
    type: CREATE_CUSTOM_PACK,
    customPack
})

export const createCustomPack = (customPack) => dispatch => {
    return PackApiUtil.createCustomPack(customPack)
        .then(customPack => dispatch(receiveNewCustomPack(customPack)))
}

export const updateCustomPack = (packId, medId, customPack) => dispatch => {
    return PackApiUtil.updateCustomPack(packId, medId, customPack)
        .then(updatedPack => dispatch(receiveUpdatedPack(updatedPack)))
}

export const fetchCustomPacks = (flag) => dispatch => {
    return PackApiUtil.fetchCustomPacks(flag)
        .then(allCustomPacks => dispatch(receiveAllPacks(allCustomPacks)))
}

export const fetchPack = (packId) => dispatch => {
    return PackApiUtil.fetchPack(packId)
        .then(pack => dispatch(receivePack(pack)))
}

export const fetchAllPacks = () => dispatch => {
    return PackApiUtil.fetchAllPacks()
        .then(allPacks => dispatch(receiveAllPacks(allPacks)))
}

export const deleteCustomPack = (packId) => dispatch => {
    return PackApiUtil.deleteCustomPack(packId)
        .then((packId) => deletePack(packId))
}

