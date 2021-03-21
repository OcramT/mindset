import React from 'react';
import {Link} from 'react-router-dom';

class Meditation extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                <div className='meditation-bg'>
                <header className='med-nav'>
                    <div className='nav-wrapper'>
                        <Link to='/dashboard 'className='close-wrapper'>
                            <img className='close' src={close}/>
                        </Link>
                        <div className='med-details'>managing anxiety?</div>
                        <div></div>
                    </div>
                </header>
                    <div className='med-wrapper'>
                        <div className='bg-wrapper'>
                            <div className='play-wrapper'>
                                <div className='play-info'>
                                    <div className='day'>Day 2/30</div>
                                    <div className='time'>20 minutes</div>
                                </div>
                                <div className='button-wrapper'>
                                    <img className='med-button' src={medButton}/>
                                    <img className='play-button' src={medPlay}/>
                                </div>
                                    <div className='progress-bar'></div>
                                    <div className='timer'> 00:00</div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Meditation;