import React from 'react';
import { NavLink } from 'react-router-dom';
import RightNavLinks from './right_nav_links';
import LeftNavBarLinks from './left_nav_links';
import GreetingContainer from '../session_form/greeting_container';
import RNLC from '../nav/right_nav_links_container';

document.addEventListener("scroll", () => {
    document.documentElement.dataset.scroll = window.scrollY;
});

class NavBar extends React.Component {
    constructor(props) {
        super(props)
        this.dummy = this.props.dummyUser
        this.login = this.props.login.bind(this)
    }

    render() { 
        return (
            <>
                <div className='nav-wrapper'>
                    <div className='nav-bar hidden'>
                        <div className='nav-spacer'></div>
                        <div className='nav-left'>
                            <NavLink className='home-nav hidden' to='/'>
                                <img className='logo' src={logoText} />
                            </NavLink>
                            <LeftNavBarLinks />
                        </div>
                            <div className='nav-spacer-center'></div>
                        <div className='nav-right'>
                            <RNLC />
                            <div className='greeting'>
                                <GreetingContainer />
                            </div>
                        </div>
                        <div className='nav-spacer'></div>
                    </div>
                </div>
            </>
        )
    };
};

export default NavBar;