import React from 'react';

class Player extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            playing: false,
            progress: 0,
            seeking: false,
            currentTime: 0,
            duration: 0,
            completed: false
        }
        this.currentMed = this.props.currentMed
        this.audio = new Audio(this.props.currentMedUrl)
        this.handlePlay = this.handlePlay.bind(this)
        this.onScrub = this.onScrub.bind(this);
        this.onScrubEnd = this.onScrubEnd.bind(this);
    }

    componentDidMount() {
        this.audio.addEventListener("timeupdate", e => {
            this.setState({
                currentTime: this.audio.currentTime,
                duration: this.audio.duration
            });
        });
    }

    componentWillUnmount() {
        this.audio.removeEventListener("timeupdate", () => {})
        this.audio.pause()
    }

    startTimer() {
        setInterval(() => {
            if (this.audio.ended) {
                return this.setState({ completed: true })
            } else {
                return this.setState({ progress: this.audio.currentTime })
            }
        }, [1000]);
    }

    handlePlay() {
        if (!this.state.playing) {
            this.setState({ 
                playing: true 
            })
            this.audio.play()
        } else {
            this.setState({ playing: false })
            this.audio.pause()
        }
        this.startTimer()
    }

    onScrub(value) {
        if (this.state.playing) {
            this.audio.pause()
            this.setState({playing: false})
        } 
        this.setState({
            progress: value,
            currentTime: value,
        })
    }

    onScrubEnd() {
        if (!this.state.playing) {
            this.audio.currentTime = this.state.currentTime
        }
        this.handlePlay()
        console.log(this.state)
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
                        : <div className='button-wrapper'>
                            <img className='med-button' src={medPause} />
                        </div>}
                </div>
                <input 
                    type='range' 
                    value={this.state.progress}
                    min="0"
                    max={this.state.duration}
                    step="1"
                    onMouseDown={() => this.handlePlay()}
                    onChange={(e) => this.onScrub(e.target.value)}
                    onMouseUp={this.onScrubEnd}
                    onKeyUp={this.onScrubEnd}
                    className='progress-bar'/>
                <div className='timer'>{this.formatTime(this.state.currentTime)}</div>
            </>
        )
    }
}

export default Player;