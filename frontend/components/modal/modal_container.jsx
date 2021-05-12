import { connect } from 'react-redux';
import Modal from './modal';
import { createCustomPack } from '../../actions/pack_actions';

const mSTP = state => ({
})

const mDTP = dispatch => ({
    createCustomPack: customPack => dispatch(createCustomPack(customPack)),
})

export default connect(mSTP, mDTP)(Modal)