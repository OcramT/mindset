import { connect } from 'react-redux';
import React from 'react';
import Pack from './pack'
import { fetchPack, clearPack, clearAllPacks, deleteCustomPack } from '../../actions/pack_actions';
import { fetchMeditation, fetchAllMeditations, deleteCustomPackMeditation } from '../../actions/meditation_actions';
import { addUserPack, removeUserPack, fetchAllUserPacks } from '../../actions/user_pack_actions';


const mSTP = (state, ownProps) => ({
    packId: ownProps.match.params.packId,
    pack: state.entities.packs.pack,
    userPacks: state.entities.users.userPacks,
    // meds: state.entities.packs.pack['meds']
})

const mDTP = dispatch => ({
    clearAllPacks: () => dispatch(clearAllPacks()),
    fetchPack: packId => dispatch(fetchPack(packId)),
    fetchMeditation: meditationId => dispatch(fetchMeditation(meditationId)),
    clearPack: pack => dispatch(clearPack(pack)),
    removeUserPack: packId => dispatch(removeUserPack(packId)),
    addUserPack: packId => dispatch(addUserPack(packId)),
    fetchAllUserPacks: () => dispatch(fetchAllUserPacks()),
    fetchAllMeditations: meditationIds => dispatch(fetchAllMeditations(meditationIds)),
    deleteCustomPackMeditation: (medId, packId) => dispatch(deleteCustomPackMeditation(medId, packId)), 
    deleteCustomPack: (packId) => dispatch(deleteCustomPack(packId))
})

export default connect(mSTP, mDTP)(Pack)