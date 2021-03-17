import { connect } from 'react-redux';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = ({ errors }) => ({
    errors: errors.session,
    formType: 'Login',
    navLink: <NavLink to="/signup">Sign Up</NavLink>
});

const mDTP = () => dispatch => ({
    processForm: user => dispatch(login(user))
});

export default connect(mSTP, mDTP)(SessionForm);