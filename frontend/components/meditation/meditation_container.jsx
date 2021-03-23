import { connect } from 'react-redux';
import React from 'react';
import Meditation from './meditation'
import TestMed from '../../../app/assets/audio/TestMeditation.mp3';
import { fetchMeditation } from '../../actions/meditation_actions';

const mSTP = (state) => ({
});

const mDTP = state => dispatch => ({
    fetchMeditation: meditationId => dispatch(fetchMeditation(meditationId)),
});

export default connect(mSTP, mDTP)(Meditation);