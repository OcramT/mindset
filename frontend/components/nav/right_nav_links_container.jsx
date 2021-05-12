import { connect } from 'react-redux';
import RightNavLinks from './right_nav_links';
import { logout, login } from '../../actions/session_actions';
import { clearAllPacks } from '../../actions/pack_actions';

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id],
    dummyUser: state.entities.users.dummy
});

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    login: user => dispatch(login(user)),
    clearAllPacks: (packs) => dispatch(clearAllPacks(packs)),
});

export default connect(mSTP, mDTP)(RightNavLinks);