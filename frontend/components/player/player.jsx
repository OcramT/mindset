import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TestMed from '../../../app/assets/audio/TestMeditation.mp3';
import { fetchMeditation } from '../../util/meditation_api_util';

class Player extends React.Component {
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
            setTime: () => { },
        }
        this.currentMed = this.props.currentMed
        this.audio = new Audio(this.props.currentMedUrl)
        this.handlePlay = this.handlePlay.bind(this)
    }

    startTimer() {
        setTrackProgress(this.audio.currentTime)
        setInterval(() => {
            setTrackProgress(this.audio.currentTime.currentTime)
        }, [1000]);
    }

    componentDidMount() {
        this.audio.addEventListener("timeupdate", e => {
            this.setState({
                currentTime: e.target.currentTime,
                duration: e.target.duration
            });
        });
    }

    componentWillUnmount() {
        this.audio.removeEventListener("timeupdate", () => { })
        this.audio.pause()
    }

    handlePlay() {
        if (!this.state.playing) {
            this.setState({ playing: true })
            return this.audio.play()
        } else {
            this.setState({ playing: false })
            return this.audio.pause()
        }
    }

    formatTime(seconds) {
        return (
            [
                Math.floor(seconds / 60),
                Math.floor(seconds % 60),
            ].map(digit => digit.toString())
                .map(digit => (digit.length === 1 ? `0${digit}` : digit)).join(':')
        )
    }

    render() {
        if (!this.currentMed) return null

        return (
            <>
            {/* <div className='day'>Day 2/30</div> */}
            <div className='time'>{this.currentMed.duration} minutes</div>
            <div onClick={() => this.handlePlay()}>
                {!this.state.playing
               ? <div className='button-wrapper'>
                    <img className='med-button' src={medButton} />
                    <img className='play-button' src={medPlay} />
                </div>
                :  <div className='button-wrapper'>
                    <img className='med-button' src={medPause} />
                </div>}
            </div>
            {/* <div className='progress-bar'></div> */}
            <div className='timer'>{this.formatTime(this.audio.currentTime)}</div>
            </>
        )
    }
}

export default Player;