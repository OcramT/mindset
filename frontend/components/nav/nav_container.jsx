import {connect} from 'react-redux';
import NavBar from './nav_bar';
import LeftNavLinks from './left_nav_links';
import RightNavLinks from './right_nav_links';

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id],
});

const mDTP = () => dispatch => ({
    logout: () => dispatch(logout()),
    login: user => dispatch(login(user))
});

export default connect(mSTP, mDTP)(RightNavLinks);