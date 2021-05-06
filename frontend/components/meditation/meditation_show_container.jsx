import { connect } from 'react-redux';
import React from 'react';
import MeditationShow from './meditation_show'
import { fetchMeditation, makeCurrentMed } from '../../actions/meditation_actions';

const mSTP = (state, ownProps) => ({
    currentMedId: ownProps.match.params.medId,
    currentMed: state.entities.meditations[ownProps.match.params.medId],
});

const mDTP = dispatch => ({
    fetchMeditation: meditationId => dispatch(fetchMeditation(meditationId)),
    makeCurrentMed: med => dispatch(makeCurrentMed(med))
});

export default connect(mSTP, mDTP)(MeditationShow);