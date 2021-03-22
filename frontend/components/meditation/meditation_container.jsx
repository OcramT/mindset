import { connect } from 'react-redux';
import React from 'react';
import Meditation from './meditation'

const mSTP = (state) => ({
    playing: false
});

const mDTP = () => dispatch => ({
    
});

export default connect(mSTP, mDTP)(Meditation);