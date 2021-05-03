import React from 'react';

class Player extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            playing: false,
            currentTime: 0,
            duration: 0,
            completed: false
        }
        this.currentMed = this.props.currentMed
        this.audio = new Audio(this.props.currentMedUrl)
        this.handlePlay = this.handlePlay.bind(this)
        this.onScrub = this.onScrub.bind(this);
        this.onScrubEnd = this.onScrubEnd.bind(this);
        this.barClick = this.barClick.bind(this);
    }

    componentDidMount() {
        this.audio.addEventListener("timeupdate", e => {
            this.setState({
                currentTime: e.target.currentTime,
                duration: this.audio.duration
            });
        });
    }

    componentWillUnmount() {
        this.audio.removeEventListener("timeupdate", () => {})
        clearInterval(this.trackTime)
        this.audio.pause()
    }

    startTimer() {
        if (this.trackTime) {
            clearInterval(this.trackTime)
        }

        this.trackTime = setInterval(() => {
            if (this.audio.ended) {
                return this.setState({ completed: true })
            } else {
                return this.setState({ currentTime: this.audio.currentTime })
            }
        }, [1000]);
    }

    handlePlay() {
        if (!this.state.playing) {
            this.audio.play()
            this.setState({ playing: true })
        } else {
            clearInterval(this.trackTime)
            this.audio.pause()
            this.setState({ playing: false })
        }
        this.startTimer()
    }

    onScrub(value) {
        clearInterval(this.trackTime)
        if (this.state.playing) {
            this.audio.pause()
            this.setState({playing: false})
        } 
        this.setState({
            currentTime: value,
        })
    }

    onScrubEnd() {
        if (!this.state.playing) {
            this.audio.currentTime = this.state.currentTime
            this.setState({seeking:false})
        }
        this.handlePlay()
        // console.log(this.state)
    }

    barClick(value) {
        
        // if (this.state.playing) {
        //     this.audio.pause()
        //     this.setState({ playing: false })
        // }
        // if(!this.state.seeking){
        clearInterval(this.trackTime)
        this.setState({
            // progress: value,
            currentTime: value,
        })
        // this.onScrubEnd()
        this.audio.currentTime = this.state.currentTime
        this.audio.play()
        // }
        // console.log(this.progressBar)
        // Width of the timeline
        // let progressBarLeft = e.pageX - this.progressBar.offsetLeft;
        // let progressBarWidth = progressBarLeft - this.progressBar.offsetWidth;

        // Left position of the handle
        // console.log(progressBarWidth)
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
                    value={this.state.currentTime}
                    min="0"
                    max={this.state.duration}
                    step="1"
                    onMouseDown={() => {this.audio.play(); this.audio.pause()}}
                    // onMouseDown={(e) => this.barClick(e.target.value)}
                    onChange={(e) => this.onScrub(e.target.value)}
                    onMouseUp={this.onScrubEnd}
                    // onClick={(e) => this.barClick(e.target.value)}
                    ref={progressBar => {this.progressBar = progressBar}}
                    className='progress-bar'/>
                <div className='timer'>{this.formatTime(this.state.currentTime)}</div>
            </>
        )
    }
}

export default Player;