import { connect } from 'react-redux';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { signup, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = ({ errors }) => ({
    errors: errors.session,
    formType: 'Sign up',
    navLink: <div className='session-text'>Already Have An Account? &nbsp; <NavLink to="/login" className='session-link'>Log In</NavLink></div>
});

const mDTP = () => dispatch => ({
    processForm: user => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(mSTP, mDTP)(SessionForm);