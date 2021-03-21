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
                <div className='bg-wrapper'>
                <header className='med-nav'>
                    <div className='nav-wrapper'>
                        <Link to='/dashboard 'className='close-wrapper'>
                            <img className='close' src={close}/>
                        </Link>
                        <div className='med-details'>managing anxiety?</div>
                    </div>
                </header>
                <div className='outer-button'>
                    <div className='button-wrapper'>
                        <div className='play-info'>
                            Day 2/30
                            20 minutes
                            <img className='med-button' src={medButton}/>
                            <img className='play-button' src={medPlay}/>
                            00:00
                        </div>
                    </div>
                </div>
                </div>
            </div>
            </>
        )
    }
}

export default Meditation;