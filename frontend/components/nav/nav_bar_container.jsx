import { connect } from 'react-redux';
import NavBar from './nav_bar';
import RightNavLinks from './right_nav_links';
import { logout, login } from '../../actions/session_actions';

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id],
    dummyUser: state.entities.users.dummy
});

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    login: user => dispatch(login(user))
});

export default connect(mSTP, mDTP)(NavBar, RightNavLinks);