import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { formType } from '../session_form/session_form';
import { withRouter } from 'react-router-dom'

class LeftNavBarLinks extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div>
                <ul className='left-nav-bar-links'>
                    <li>
                        <NavLink to='/'>Articles</NavLink>
                    </li>
                    <li>
                        <NavLink to='/'>Meditation</NavLink>
                    </li>
                    <li>
                        <NavLink to='/'>Sleep</NavLink>
                    </li>
                    <li>
                        <NavLink to='/'>Stress</NavLink>
                    </li>
                    <li>
                        <NavLink to='/'>Mindfulness</NavLink>
                    </li>
                </ul>
            </div>
        )
    }
};

export default withRouter(LeftNavBarLinks);