import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { formType } from '../session_form/session_form';
import { withRouter } from 'react-router-dom'

class RightNavBarLinks extends React.Component {
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
            <div>
                <ul className='right-nav-bar-links'>
                    <li>
                        <NavLink to='/'>About</NavLink>
                    </li>
                    <li>
                        <NavLink to='/'>Work</NavLink>
                    </li>
                    <li>
                        <NavLink to='/'>Help</NavLink>
                    </li>
                    {!this.props.currentUser && (
                        <li>
                            {routeLink}
                        </li>
                    )}   
                </ul>
            </div>
        )
    }
};

export default withRouter(RightNavBarLinks);