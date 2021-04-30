import React from 'react';
import {Link} from 'react-router-dom';
import Player from '../player/player';

class Meditation extends React.Component {
    constructor(props) {
        super(props)

        this.goBack = this.goBack.bind(this)
    }

    componentDidMount() {
        this.props.fetchMeditation(this.props.currentMedId)
    }

    goBack() {
        this.props.history.goBack();
    }

    render() {
        if (!this.props.currentMed) return null
        const {currentMed} = this.props;

        return (
            <>
                <div className='meditation-bg'>
                <header className='med-nav'>
                    <div className='nav-wrapper'>
                        <div onClick={() => this.goBack()} className='close-wrapper'>
                            <img className='close' src={close}/>
                        </div>
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
                                        // currentMedId={this.props.currentMedId}
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