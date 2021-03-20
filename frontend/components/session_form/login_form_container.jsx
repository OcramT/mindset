import { connect } from 'react-redux';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { login, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = ({ errors }) => ({
    errors: errors.session,
    formType: 'Log in',
    navLink: <div className='session-text'>New To Mindset? &nbsp; <NavLink to="/signup" className='session-link'>Sign Up For Free</NavLink></div>
});

const mDTP = () => dispatch => ({
    processForm: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(mSTP, mDTP)(SessionForm);