import { connect } from 'react-redux';
import React from 'react';
import Pack from './pack'
import { fetchPack, clearPack } from '../../actions/pack_actions';
import { fetchMeditation } from '../../actions/meditation_actions';


const mSTP = (state, ownProps) => ({
    packId: ownProps.match.params.packId,
    pack: state.entities.packs.pack,
})

const mDTP = dispatch => ({
    fetchPack: packId => dispatch(fetchPack(packId)),
    fetchMeditation: meditationId => dispatch(fetchMeditation(meditationId)),
    clearPack: pack => dispatch(clearPack(pack))
})

export default connect(mSTP, mDTP)(Pack)