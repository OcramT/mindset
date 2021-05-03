import {combineReducers} from 'redux';
import users from './users_reducer';
import meditations from './meditations_reducer';
import packs from './packs_reducer';
import userPacks from './user_packs_reducer';

const entitiesReducer = combineReducers({
    users: users,
    meditations: meditations,
    packs: packs,
    userPacks: userPacks
});

export default entitiesReducer;