import React from 'react';
import NavBar from '../nav/nav_bar';
import {NavLink} from 'react-router-dom';
import NavBarContainer from '../nav/nav_bar_container'

class Splash extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            headRoll : React.createRef(),
            transform: 'translateX(0px) scale(0.33)'
        }

        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener("scroll",this.handleScroll, false)
    }

    componentWillUnmount() {
        window.removeEventListener("scroll",this.handleScroll, false)
    }

    handleScroll() {
        let windowY = window.pageYOffset
        windowY = windowY - 1500
        let i = (windowY + 500);
        this.setState({ transform: `translateX(${i}px) scale(0.33) rotate(${i/9.5 + 5}deg)`})
        
    }

    render() {
        const style = {
            animationStyle: { 
                transform: this.state.transform,
            }
        }
        const {animationStyle} = style

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
                    <img  
                         className='animate-head' 
                         style={animationStyle}
                         src={splashHead}
                         ref={this.state.headRoll} />
                </div>
                <footer className='splash-footer'>
                    <div className='footer-content'>
                        <p>This app was created by 
                            <a href="https://www.marcotorre.io/" target='_blank'>
                                <span>&nbsp; Marco Torre &nbsp;</span>
                            </a>
                            and is a clone of Headspace.
                        </p>
                        </div>
                </footer>
            </>
        )
    }
};

export default Splash;