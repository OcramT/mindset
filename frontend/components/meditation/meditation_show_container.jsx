import { connect } from 'react-redux';
import React from 'react';
import MeditationShow from './meditation_show'
import { fetchMeditation, makeCurrentMed } from '../../actions/meditation_actions';
import { addUserMed, removeUserMed, fetchAllUserMeds } from '../../actions/user_med_actions';
import { fetchCustomPacks, clearAllPacks} from '../../actions/pack_actions';

const mSTP = (state, ownProps) => ({
    currentMedId: ownProps.match.params.medId,
    currentMed: state.entities.meditations[ownProps.match.params.medId],
    currentUser: state.entities.users[state.session.id],
    packs: state.entities.packs
});

const mDTP = dispatch => ({
    clearAllPacks: () => dispatch(clearAllPacks()),
    fetchMeditation: meditationId => dispatch(fetchMeditation(meditationId)),
    makeCurrentMed: med => dispatch(makeCurrentMed(med)),
    addUserMed: medId => dispatch(addUserMed(medId)),
    removeUserMed: medId => dispatch(removeUserMed(medId)),
    fetchAllUserMeds: () => dispatch(fetchAllUserMeds()),
    fetchCustomPacks: flag => dispatch(fetchCustomPacks(flag))
});

export default connect(mSTP, mDTP)(MeditationShow);