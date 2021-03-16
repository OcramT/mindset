import {combineReducers} from 'redux';
import session from './session_errors_reducer';

const errorsReducer = combineReducers({
    session: session
});

export default errorsReducer;