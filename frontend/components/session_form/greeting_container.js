import {connect} from 'react-redux';
import Greeting from './greeting'
import {logout, login} from '../../actions/session_actions';

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id],
});

const mDTP = () => dispatch => ({
    logout: () => dispatch(logout()),
    login: user => dispatch(login(user))
});

export default connect(mSTP, mDTP)(Greeting);