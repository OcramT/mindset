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
            <div className='hidden'>
                <ul className='left-nav-bar-links'>
                    <li className='articles'>
                        <NavLink to='/'>Articles</NavLink>
                    </li>
                    <li className='med-link'>
                        <NavLink to='/meditation'>Meditation</NavLink>
                    </li>
                    <li className='sleep'>
                        <NavLink to='/'>Sleep</NavLink>
                    </li>
                    <li className='stress'>
                        <NavLink to='/'>Stress</NavLink>
                    </li>
                    <li className='mindfulness'>
                        <NavLink to='/'>Mindfulness</NavLink>
                    </li>
                </ul>
            </div>
        )
    }
};

export default withRouter(LeftNavBarLinks);