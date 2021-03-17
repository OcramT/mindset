import { connect } from 'react-redux';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = ({ errors }) => ({
    errors: errors.session,
    formType: 'Sign Up',
    navLink: <NavLink to="/login">Login</NavLink>
});

const mDTP = () => dispatch => ({
    processForm: user => dispatch(signup(user))
});

export default connect(mSTP, mDTP)(SessionForm);