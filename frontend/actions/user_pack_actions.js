import * as UserPackApiUtil from '../util/user_pack_api_util';

export const ADD_USER_PACK = 'ADD_USER_PACK';
export const REMOVE_USER_PACK = 'REMOVE_USER_PACK';

export const addPack = pack => ({
    type: ADD_USER_PACK,
    pack
})

export const removePack = pack => ({
    type: REMOVE_USER_PACK,
    pack
});

export const addUserPack = (packId) => dispatch => {
    return UserPackApiUtil.addUserPack(packId)
        .then(pack => dispatch(addPack(pack)))
}

export const removeUserPack = (packId) => dispatch => {
    return UserPackApiUtil.removeUserPack(packId)
        .then(() => dispatch(removePack()))
}