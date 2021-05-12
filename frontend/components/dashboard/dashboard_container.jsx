import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { fetchAllMedIds } from '../../actions/meditation_actions';
import { fetchAllPacks, clearAllPacks } from '../../actions/pack_actions';
import { fetchAllUserPacks } from '../../actions/user_pack_actions';
import { fetchAllUserMeds } from '../../actions/user_med_actions';

const mSTP = state => ({
    medIds: state.entities.meditations.medIds,
    userPacks: state.entities.users.userPacks,
    userMeds: state.entities.users.userMeds,
});

const mDTP = dispatch => ({
    fetchAllMedIds: () => dispatch(fetchAllMedIds()),
    fetchAllPacks: () => dispatch(fetchAllPacks()),
    clearAllPacks: (packs) => dispatch(clearAllPacks(packs)),
    fetchAllUserPacks: () => dispatch(fetchAllUserPacks()),
    fetchAllUserMeds: () => dispatch(fetchAllUserMeds()),
});

export default connect(mSTP, mDTP)(Dashboard);