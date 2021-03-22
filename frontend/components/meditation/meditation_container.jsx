import { connect } from 'react-redux';
import React from 'react';
import Meditation from './meditation'

const mSTP = (state) => ({
    playing: false,
    currentTime: 0,
    duration: 1000,
    progress: 50,
    isSeeking: true,
    setTime: () => {}
});

const mDTP = () => dispatch => ({
    
});

export default connect(mSTP, mDTP)(Meditation);