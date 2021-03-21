import React from 'react';
import NavBar from '../nav/nav_bar';
import {NavLink} from 'react-router-dom';


class Splash extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                <div className='nav-main-splash'><NavBar /></div>
                <main className='splash-wrapper'>
                    <div className='ticker'>Ticker</div>
                    <ul className='ticker-subs'>
                        <li className='ticker-sub1'>Ticker 1</li>
                        <li className='ticker-sub2'>Ticker 2</li>
                        <li className='ticker-sub3'>Ticker 3</li>
                        <li className='ticker-sub4'>Ticker 4</li>
                    </ul>
                    <div className='article-header'>Articles Header</div>
                    <ul className='articles-list'>
                        <li className='article1'>Article a</li>
                        <li className='article2'>Article b</li>
                        <li className='article3'>Article c</li>
                        <li className='article4'>Article d</li>
                        <li className='article5'>Article e</li>
                        <li className='article6'>Article g</li>
                    </ul>
                    <NavLink to='/' className='article-link'>Article Link</NavLink>
                </main>
            </>
        )
    }
};

export default Splash;