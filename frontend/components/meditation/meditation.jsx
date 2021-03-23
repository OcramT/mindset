import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import TestMed from '../../../app/assets/audio/TestMeditation.mp3';
import { fetchMeditation } from '../../util/meditation_api_util';
import Player from '../player/player';

class Meditation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            playing: false,
            progress: 0,
            currentTime: 0,
            setCurrentTime: 0,
            duration: 0,
            setDuration: 0,
            isSeeking: false,
            setTime: () => {},
        }
    }

    componentDidMount() {
        this.props.fetchMeditation(this.props.currentMedId)
    }

    render() {
        if (!this.props.currentMed) return null
        const {currentMed} = this.props;

        return (
            <>
                <div className='meditation-bg'>
                <header className='med-nav'>
                    <div className='nav-wrapper'>
                        <Link to='/dashboard 'className='close-wrapper'>
                            <img className='close' src={close}/>
                        </Link>
                        <div className='med-details'>{currentMed.title}</div>
                        <div></div>
                    </div>
                </header>
                    <div className='med-wrapper'>
                        <div className='bg-wrapper'>
                            <div className='play-wrapper'>
                                <div className='play-info'>
                                    <Player
                                        className="button-wrapper"
                                        currentMedId={this.props.currentMedId}
                                        currentMed={currentMed}
                                        currentMedUrl={currentMed.url} />
                                </div >
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Meditation;