import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { fetchAllMedIds } from '../../actions/meditation_actions';

const mSTP = state => ({
    medIds: state.entities.meditations.medIds
});

const mDTP = dispatch => ({
    fetchAllMedIds: () => dispatch(fetchAllMedIds())
});

export default connect(mSTP, mDTP)(Dashboard);