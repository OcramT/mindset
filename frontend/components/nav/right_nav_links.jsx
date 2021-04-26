import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { formType } from '../session_form/session_form';
import { withRouter } from 'react-router-dom'

class RightNavLinks extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {location} = this.props
        let routeLink = <NavLink to='/login'>Log in</NavLink>
        if (location.pathname === '/login') {
            routeLink = <NavLink to='/signup'>Sign up</NavLink>
        };

        return (
            <div className='hidden'>
                <ul className='right-nav-bar-links'>
                    <li className='about'>
                        <NavLink to='/about'>About</NavLink>
                    </li>
                    <li className='work'>
                        <NavLink to='/work'>Work</NavLink>
                    </li>
                    {!this.props.currentUser && (
                        <li className= 'demo'>
                            {routeLink}
                        </li>
                    )}   
                </ul>
            </div>
        )
    }
};

export default withRouter(RightNavLinks);