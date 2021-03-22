import {combineReducers} from 'redux';
import users from './users_reducer';
import meditations from './meditations_reducer';

const entitiesReducer = combineReducers({
    users: users,
    meditations: meditations
});

export default entitiesReducer;