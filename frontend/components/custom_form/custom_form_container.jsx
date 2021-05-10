import { connect } from 'react-redux';
import React from 'react';
import CustomForm from './custom_form'
import { fetchMeditation, makeCurrentMed } from '../../actions/meditation_actions';
import { addUserMed, removeUserMed, fetchAllUserMeds } from '../../actions/user_med_actions';
import { fetchCustomPacks, updateCustomPack } from '../../actions/pack_actions';

const mSTP = (state, ownProps) => ({

});

const mDTP = dispatch => ({
    fetchMeditation: meditationId => dispatch(fetchMeditation(meditationId)),
    makeCurrentMed: med => dispatch(makeCurrentMed(med)),
    addUserMed: medId => dispatch(addUserMed(medId)),
    removeUserMed: medId => dispatch(removeUserMed(medId)),
    fetchAllUserMeds: () => dispatch(fetchAllUserMeds()),
    fetchCustomPacks: flag => dispatch(fetchCustomPacks(flag)),
    updateCustomPack: (packId, medId, pack) => dispatch(updateCustomPack(packId, medId, pack))
});

export default connect(mSTP, mDTP)(CustomForm);