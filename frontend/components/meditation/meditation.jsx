import React from 'react';
import {Link} from 'react-router-dom';
import TestMed from '../../../app/assets/audio/TestMeditation.mp3';

class Meditation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {playing: false}
        this.audio = new Audio(TestMed)
        this.handlePlay = this.handlePlay.bind(this)
    }

    handlePlay() {
        // console.log(this.props.playing)
        // this.setState({ [this.props.playing] : true})
        // console.log(this.props.playing)
        console.log(this.state)
        if (!this.state.playing) {
            this.setState({playing: true})
            return this.audio.play()
        } else {
            this.setState({playing : false })
            return this.audio.pause()
        }
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
                                <div className='button-wrapper' onClick={() => this.handlePlay()}>
                                    <audio />
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