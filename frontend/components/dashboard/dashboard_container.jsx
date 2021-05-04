import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { fetchAllMedIds } from '../../actions/meditation_actions';
import { fetchAllPacks, clearAllPacks } from '../../actions/pack_actions';
import { fetchAllUserPacks } from '../../actions/user_pack_actions';

const mSTP = state => ({
    medIds: state.entities.meditations.medIds,
    packs: state.entities.packs,
    userPacks: state.entities.users.userPacks
});

const mDTP = dispatch => ({
    fetchAllMedIds: () => dispatch(fetchAllMedIds()),
    fetchAllPacks: () => dispatch(fetchAllPacks()),
    clearAllPacks: (packs) => dispatch(clearAllPacks(packs)),
    fetchAllUserPacks: () => dispatch(fetchAllUserPacks())
});

export default connect(mSTP, mDTP)(Dashboard);