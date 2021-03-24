import React from 'react';
import NavBar from '../nav/nav_bar';
import {NavLink} from 'react-router-dom';
import NavBarContainer from '../nav/nav_bar_container'

document.addEventListener("scroll", () => {
    document.documentElement.dataset.scroll = window.scrollY;
});

class Splash extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                <div className='nav-main-splash'><NavBarContainer /></div>
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
                        <li className='article1'>
                            <p className='article-text-box-long'>
                                Meditation for financial stress</p>
                        </li>
                        <li className='article2'>
                            <p className='article-text-box'>
                                Trouble falling asleep</p>
                        </li>
                        <li className='article3'>
                            <p className='article-text-box'>
                                How to develop self-discipline</p>
                        </li>
                        <li className='article4'>
                            <p className='article-text-box'>
                                How to deal with loneliness</p>
                        </li>
                        <li className='article5'>
                            <p className='article-text-box'>
                                How to stop negative self-talk</p>
                        </li>
                        <li className='article6'>
                            <p className='article-text-box-long'>
                                Why do I wake up tired?</p>
                        </li>
                    </ul>
                    <NavLink to='/' className='article-link'>Article Link</NavLink>
                </main>
                <div className='animation-wrapper'>
                    {/* <img preserveAspectRatio="xMidYMin slice" className='animate-path' src={headPath}/> */}
                    <img preserveAspectRatio="xMidYMin slice" className='animate-head' src={splashHead} />
                </div>
            </>
        )
    }
};

export default Splash;