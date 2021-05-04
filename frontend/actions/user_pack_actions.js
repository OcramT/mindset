import * as UserPackApiUtil from '../util/user_pack_api_util';

export const ADD_USER_PACK = 'ADD_USER_PACK';
export const REMOVE_USER_PACK = 'REMOVE_USER_PACK';
export const FETCH_ALL_USER_PACKS = 'FETCH_ALL_USER_PACKS'

export const addPack = userPack => ({
    type: ADD_USER_PACK,
    userPack
})

export const removePack = pack => ({
    type: REMOVE_USER_PACK,
    pack
});

export const fetchUserPacks = allUserPacks => ({
    type: FETCH_ALL_USER_PACKS,
    allUserPacks: allUserPacks.userpacks
})

export const addUserPack = (packId) => dispatch => {
    return UserPackApiUtil.addUserPack(packId)
        .then(packId => dispatch(addPack(packId)))
}

export const removeUserPack = (packId) => dispatch => {
    return UserPackApiUtil.removeUserPack(packId)
        .then(() => dispatch(removePack()))
}

export const fetchAllUserPacks = () => dispatch => {
    return UserPackApiUtil.fetchAllUserPacks()
        .then(allUserPacks => dispatch(fetchUserPacks(allUserPacks)))
}