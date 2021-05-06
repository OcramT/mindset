import { connect } from 'react-redux';
import DiscoverPage from './discover';
import { fetchAllMedIds, fetchAllMeditations } from '../../actions/meditation_actions';
import { fetchAllPacks, clearAllPacks } from '../../actions/pack_actions'

const mSTP = state => ({
    medIds: state.entities.meditations.medIds,
    packs: state.entities.packs,
    allMeditations: state.entities.meditations.allMeditations
});

const mDTP = dispatch => ({
    fetchAllMedIds: () => dispatch(fetchAllMedIds()),
    fetchAllPacks: () => dispatch(fetchAllPacks()),
    clearAllPacks: (packs) => dispatch(clearAllPacks(packs)),
    fetchAllMeditations: flag => dispatch(fetchAllMeditations(flag))
});

export default connect(mSTP, mDTP)(DiscoverPage);