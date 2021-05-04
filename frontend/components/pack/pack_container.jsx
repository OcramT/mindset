import { connect } from 'react-redux';
import React from 'react';
import Pack from './pack'
import { fetchPack, clearPack } from '../../actions/pack_actions';
import { fetchMeditation } from '../../actions/meditation_actions';
import { addUserPack, removeUserPack } from '../../actions/user_pack_actions';


const mSTP = (state, ownProps) => ({
    packId: ownProps.match.params.packId,
    pack: state.entities.packs.pack,
    userPacks: state.entities.users.userPacks
})

const mDTP = dispatch => ({
    fetchPack: packId => dispatch(fetchPack(packId)),
    fetchMeditation: meditationId => dispatch(fetchMeditation(meditationId)),
    clearPack: pack => dispatch(clearPack(pack)),
    removeUserPack: packId => dispatch(removeUserPack(packId)),
    addUserPack: packId => dispatch(addUserPack(packId))
})

export default connect(mSTP, mDTP)(Pack)