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
                        <a href='https://www.marcotorre.io/' target="_blank">Portfolio</a>
                    </li>
                    <li className='med-link'>
                        <a href='https://www.linkedin.com/in/marco-torre-388286138/' target="_blank">LinkedIn</a>
                    </li>
                    <li className='sleep'>
                        <a href='https://github.com/OcramT' target="_blank">GitHub</a>
                    </li>
                    <li className='stress'>
                        <a href='https://angel.co/u/marco-torre-1' target="_blank">AngelList</a>
                    </li>
                    {/* <li className='mindfulness'>
                        <a href="mailto:marcoatorre@gmail.com" target="_blank">Contact</a>
                    </li> */}
                </ul>
            </div>
        )
    }
};

export default withRouter(LeftNavBarLinks);