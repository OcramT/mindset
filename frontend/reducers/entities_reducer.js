import {combineReducers} from 'redux';
import users from './users_reducer';
import meditations from './meditations_reducer';
import packs from './packs_reducer';

const entitiesReducer = combineReducers({
    users: users,
    meditations: meditations,
    packs: packs
});

export default entitiesReducer;