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
                    <div className='ticker'>
                        <div className='ticker-text-wrap'>
                            How to be more empathetic
                        </div>
                    </div>
                    <ul className='ticker-subs'>
                        <li className='ticker-sub1'>01 - The Headspace Guide to Sleep...</li>
                        <li className='ticker-sub2'>02 - How to sleep better</li>
                        <li className='ticker-sub3'>03 - How to relieve stress</li>
                        <li className='ticker-sub4'>04 - How to meditate</li>
                    </ul>
                    <div className='article-header'>Latest articles</div>
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