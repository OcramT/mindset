import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { fetchAllMedIds } from '../../actions/meditation_actions';
import { fetchAllPacks } from '../../actions/pack_actions'

const mSTP = state => ({
    medIds: state.entities.meditations.medIds,
    packs: state.entities.packs
});

const mDTP = dispatch => ({
    fetchAllMedIds: () => dispatch(fetchAllMedIds()),
    fetchAllPacks: () => dispatch(fetchAllPacks())
});

export default connect(mSTP, mDTP)(Dashboard);