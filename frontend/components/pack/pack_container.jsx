import { connect } from 'react-redux';
import React from 'react';
import Pack from './pack'
import { fetchPack } from '../../actions/pack_actions';

const mSTP = (state, ownProps) => ({
    packId: ownProps.match.params.packId,
    currentPack: state.entities.packs.packs
})

const mDTP = dispatch => ({
    fetchPack: packId => dispatch(fetchPack(packId)),
    fetchMeditation: meditationId => dispatch(fetchMeditation(meditationId)),
})

export default connect(mSTP, mDTP)(Pack)